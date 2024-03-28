
import db from "@/lib/db"
import RegisterClientPage from "./client"
import { cookies } from "next/headers"

async function RegistePage() {
    const cookiesStore = cookies()
    const token = await db.getUser(cookiesStore)

  return <RegisterClientPage token={token?.token} id={token?.id}/>
}

export default RegistePage