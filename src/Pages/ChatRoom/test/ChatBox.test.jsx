import React from "react";
import { render, screen } from "@testing-library/react";
import ChatBox from "../ChatBox";
import { AuthContext } from "../../../Providers/AuthProvider";
import { BrowserRouter } from "react-router-dom";

describe("ChatBox component", () => {
  it("renders the ChatBox component", () => {
    const user = {
      displayName: "Gangua701",
      // Add other user properties as needed for your test
    };

    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ user }}>
          <ChatBox />
        </AuthContext.Provider>
      </BrowserRouter>
    ); // Render the ChatBox component

    // You can use assertions to check for specific elements or text within the component.
    // For example, you can check if the "Back Home" button is present:
    const backButton = screen.getByText("Back Home");
    expect(backButton).toBeInTheDocument();

    // You can also check if the user information is present, modify the text accordingly:
    const userInformation = screen.getByText("Your User Information");
    expect(userInformation).toBeInTheDocument();

    // Add more assertions as needed to verify other elements or behaviors.
  });
});
