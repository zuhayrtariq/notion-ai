"use server";

import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server";

export async function createNewDocument() {
    auth.protect();

    const { sessionClaims } = await auth();
    const docCollectionDef = adminDb.collection("documents");
    const docRef = await docCollectionDef.add({ title: "New Doc" });
    await adminDb
        .collection("users")
        .doc(sessionClaims?.email!)
        .collection("rooms")
        .doc(docRef.id)
        .set({
            userId: sessionClaims?.email,
            role: "Owner",
            createdAt: new Date(),
            roomId: docRef.id,
        });
    return { docId: docRef.id };
}
