// Zustand state management
import create from 'zustand';

const usePlayerStore = create((set) => ({
    playing: false,
    play: () => set({ playing: true }),
    pause: () => set({ playing: false }),
}));

export default usePlayerStore;