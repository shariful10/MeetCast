export default MeetingSchedule;
import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import MeetingSchedule from "./MeetingSchedule";
import { AuthContext } from "../../Providers/AuthProvider";

const MockAuthContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ user: { email: "mock@example.com" } }}>
      {children}
    </AuthContext.Provider>
  );
};

test("renders key elements and labels", () => {
  render(
    <MockAuthContextProvider>
      <MeetingSchedule />
    </MockAuthContextProvider>
  );

  const expectedElements = [
    "Schedule a Meeting",
    "Topic",
    "When",
    "Meeting ID",
    "Current Time",
    "Passcode",
    "Generate",
  ];

  expectedElements.forEach((element) => {
    const foundElement = screen.getByText(element);
    expect(foundElement).toBeInTheDocument();
  });
});