import { cookies } from "next/headers";
import { portalClient } from "./portal-auth";

export async function portalServerClient(writable = false) {
  const jar = await cookies();
  return portalClient({
    getAll: () => jar.getAll(),
    setAll: (updates) => {
      if (writable) {
        for (const { name, value, options } of updates) jar.set(name, value, options);
      }
    },
  });
}
