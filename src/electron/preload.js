import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  // define secure functions
});
