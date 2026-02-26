/**
 * Per-account category folder configuration.
 *
 * Each key is the account's email address.
 * The value is an array of category folders that should be shown
 * in the sidebar when that account is active.
 *
 * `colour` drives both the dot background colour (bg-*) and is stored
 * as a Tailwind text-* class so the mapping is: text-X-500 → bg-X-500.
 *
 * To add folders for a new account, simply add a new entry here.
 */
export interface AccountCategoryFolder {
    title: string;
    label?: string;
    colour: string;
}

export const accountCategoryFolders: Record<string, AccountCategoryFolder[]> = {
    // ── Lakshan ──────────────────────────────────────────────────────────────
    "lweerasinghe@vyrian.com": [
        { title: "Forums", label: "1", colour: "text-blue-500" },
        { title: "Updates", label: "3", colour: "text-green-500" },
    ],

    // ── Oshen ────────────────────────────────────────────────────────────────
    "oshen@vyrian.com": [
        { title: "Forums", label: "5", colour: "text-violet-500" },
    ],

    // ── Vishwa ───────────────────────────────────────────────────────────────
    "vishwa@vyrian.com": [
        { title: "Forums", label: "2", colour: "text-amber-500" },
        { title: "Updates", label: "4", colour: "text-emerald-500" },
        { title: "Folder A", label: "7", colour: "text-rose-500" },
    ],
};
