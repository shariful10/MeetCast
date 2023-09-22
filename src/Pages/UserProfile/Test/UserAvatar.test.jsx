import { render, screen } from "@testing-library/react"
import UserAvatar from "../UserAvatar"
import { expect, it } from "vitest"

it("should have hello world", ()=>{
    render(<UserAvatar></UserAvatar>)
    const messege = screen.queryByText("Hello World")
    expect(messege).toBeVisible()
})