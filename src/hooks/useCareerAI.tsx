"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type {
  AppState,
  UserProfile,
  CVData,
  InterviewSession,
} from "@/types/user";
import {
  initialState,
  readStorage,
  writeStorage,
  sanitizeState,
  STORAGE_KEY,
} from "@/lib/storage";
import { createDemoState } from "@/data/demo";
import { getCareer } from "@/data/careers";
interface CareerContext {
  state: AppState;
  hydrated: boolean;
  toast: string;
  warning: string;
  updateProfile: (patch: Partial<UserProfile>) => void;
  answerQuestion: (id: string, answer: string) => void;
  selectCareer: (slug: string) => void;
  toggleTask: (slug: string, id: string) => void;
  updateCV: (patch: Partial<CVData>) => void;
  setInterview: (session: InterviewSession | null) => void;
  toggleTheme: () => void;
  loadDemo: () => void;
  reset: () => void;
  toggleSavedJob: (id: string) => void;
  notify: (message: string) => void;
  dismissWarning: () => void;
}
const Context = createContext<CareerContext | null>(null);
export function CareerAIProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(initialState);
  const [hydrated, setHydrated] = useState(false),
    [toast, setToast] = useState(""),
    [warning, setWarning] = useState("");
  useEffect(() => {
    const saved = readStorage();
    setState(saved.state);
    setWarning(saved.warning);
    setHydrated(true);
    const sync = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        try {
          setState(
            event.newValue
              ? sanitizeState(JSON.parse(event.newValue))
              : initialState(),
          );
        } catch {
          setWarning(
            "A saved change could not be read. Your current work is still available.",
          );
        }
      }
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.style.colorScheme = state.theme;
    if (!writeStorage(state))
      setWarning(
        "Your browser could not save changes. Keep this tab open; progress is available for this session.",
      );
  }, [state, hydrated]);
  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 3600);
    return () => window.clearTimeout(timer);
  }, [toast]);
  const api: CareerContext = {
    state,
    hydrated,
    toast,
    warning,
    updateProfile: (patch) =>
      setState((s) => ({
        ...s,
        profile: { ...s.profile, ...patch },
        demo: false,
      })),
    answerQuestion: (id, answer) =>
      setState((s) => ({
        ...s,
        assessment: { ...s.assessment, [id]: answer },
      })),
    selectCareer: (slug) => {
      if (getCareer(slug)) {
        setState((s) => ({ ...s, selectedCareer: slug }));
        setToast("Career path updated. Your skill gap and roadmap are ready.");
      }
    },
    toggleTask: (slug, id) =>
      setState((s) => {
        const completed = s.completedTasks[slug] ?? [];
        return {
          ...s,
          completedTasks: {
            ...s.completedTasks,
            [slug]: completed.includes(id)
              ? completed.filter((t) => t !== id)
              : [...completed, id],
          },
        };
      }),
    updateCV: (patch) => setState((s) => ({ ...s, cv: { ...s.cv, ...patch } })),
    setInterview: (session) => setState((s) => ({ ...s, interview: session })),
    toggleTheme: () =>
      setState((s) => ({ ...s, theme: s.theme === "dark" ? "light" : "dark" })),
    loadDemo: () => {
      setState((s) => createDemoState(s.theme));
      setToast("Zahid's demo profile is ready to explore.");
    },
    reset: () => {
      setState((s) => ({ ...initialState(), theme: s.theme }));
      setToast("Profile cleared. You can start fresh.");
    },
    toggleSavedJob: (id) =>
      setState((s) => ({
        ...s,
        savedJobs: s.savedJobs.includes(id)
          ? s.savedJobs.filter((j) => j !== id)
          : [...s.savedJobs, id],
      })),
    notify: setToast,
    dismissWarning: () => setWarning(""),
  };
  return <Context.Provider value={api}>{children}</Context.Provider>;
}
export function useCareerAI(): CareerContext {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("CareerAIProvider is required");
  return ctx;
}
