import React from "react";
import { render, screen } from "@testing-library/react";
import MyMeetings from "./MyMeetings";
import { AuthContext } from "../../Providers/AuthProvider";
import { expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";

const mockUser = {
    uid: "mock-uid",
    email: "mock@example.com",
};

const mockAuthContext = {
    user: mockUser,
    loading: false,
};

test('test mymeeting', () => {
    render(
        <MemoryRouter>
            <AuthContext.Provider value={mockAuthContext}>
                <MyMeetings />
            </AuthContext.Provider>
        </MemoryRouter>
    );

    expect(screen.getByText("Topic")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Time")).toBeInTheDocument();
    expect(screen.getByText("Duration")).toBeInTheDocument();
    expect(screen.getByText("Join")).toBeInTheDocument();
    expect(screen.getByText("Copy")).toBeInTheDocument();
});
