import DatabaseManager from "./DatabaseManager.mjs";

async function main() {
    const dbManager = new DatabaseManager();
    await dbManager.initDb();

    // Erstelle die Tabelle 'users'
    await dbManager.createTable("users", [
        { name: "id", type: "INTEGER PRIMARY KEY AUTOINCREMENT" },
        { name: "username", type: "TEXT" },
        { name: "password", type: "TEXT" },
    ]);

    // Füge einen neuen Benutzer ein
    await dbManager.insertData("users", {
        username: `john_doe_${Math.random()}`,
        password: "password123",
    });

    // Hole alle Benutzer
    const users = await dbManager.fetchData("users");
    console.log("All users:", users);

    // Finde einen Benutzer anhand des Benutzernamens
    const foundUser = await dbManager.fetchData("users", {
        username: "john_doe",
    });
    console.log("Found user:", foundUser);

    // Lösche einen Benutzer
    await dbManager.deleteData("users", {
        username: "john_doe_0.23253312383203872",
    });

    // Liste alle Zeilen der Tabelle 'users' auf
    const allRows = await dbManager.listAllRows("users");
    console.log("All rows:", allRows);

    // Schließe die Datenbankverbindung
    await dbManager.closeDb();
}

main().catch(console.error);
