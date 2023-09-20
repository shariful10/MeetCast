import { render, screen } from "@testing-library/react"
import UserAvatar from "../UserAvatar"
import { expect } from "vitest"

it("should have hello world", ()=>{
    render(<UserAvatar></UserAvatar>)
    const messege = screen.queryByText("Hello Wordl")
    expect(messege).toBeVisible()
})