export const AGE_KEY = "west-ford-age-confirmed";

export type AgeChoice = "yes" | "no";

export const readAgeChoice = (): AgeChoice | null => {
  try {
    const value = localStorage.getItem(AGE_KEY);
    return value === "yes" || value === "no" ? value : null;
  } catch {
    return null;
  }
};

export const writeAgeChoice = (choice: AgeChoice) => {
  try {
    localStorage.setItem(AGE_KEY, choice);
  } catch {
    /* ignore private-mode failures */
  }
};
