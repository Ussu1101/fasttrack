import { describe, it, expect, vi, beforeEach } from "vitest";
import { deliverContactMessage } from "../lib/email/contactDelivery";

describe("Contact Delivery Service Abstraction", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("handles unconfigured email provider safely without throwing or pretending live delivery occurred", async () => {
    // When RESEND_API_KEY is not set
    const result = await deliverContactMessage({
      name: "Jane Doe",
      email: "jane@example.com",
      subject: "Test Question",
      message: "This is a test inquiry about fasting schedules.",
    });

    expect(result.success).toBe(true);
    expect(result.providerConfigured).toBe(false);
    expect(result.delivered).toBe(false);
    expect(result.infoMessage).toContain("Usssamaa@gmail.com");
  });

  it("attempts delivery via provider when API key is configured", async () => {
    process.env.RESEND_API_KEY = "test_key_mock";

    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: "mock_email_123" }),
    });
    vi.stubGlobal("fetch", fetchMock);

    const result = await deliverContactMessage({
      name: "John Smith",
      email: "john@example.com",
      subject: "Live Delivery Test",
      message: "Testing email dispatch with mock provider.",
    });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.resend.com/emails",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          Authorization: "Bearer test_key_mock",
        }),
      })
    );

    expect(result.success).toBe(true);
    expect(result.providerConfigured).toBe(true);
    expect(result.delivered).toBe(true);

    // Clean up
    delete process.env.RESEND_API_KEY;
  });

  it("handles provider API error responses gracefully", async () => {
    process.env.RESEND_API_KEY = "test_invalid_key";

    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 401,
      text: async () => "Unauthorized API key",
    });
    vi.stubGlobal("fetch", fetchMock);

    const result = await deliverContactMessage({
      name: "Alex",
      email: "alex@example.com",
      subject: "Failing Dispatch Test",
      message: "Testing error handling when provider rejects request.",
    });

    expect(result.success).toBe(false);
    expect(result.providerConfigured).toBe(true);
    expect(result.delivered).toBe(false);
    expect(result.error).toContain("401");

    // Clean up
    delete process.env.RESEND_API_KEY;
  });
});
