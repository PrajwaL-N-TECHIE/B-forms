import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import BForms from "./pages/BForms";
import BFormView from "./pages/BFormView";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/" element={<BForms />} />
        <Route path="/host" element={<BForms />} />
        <Route path="/b-forms" element={<BForms />} />
        <Route path="/:id" element={<BFormView />} />
        <Route path="/b-forms/:id" element={<BFormView />} />
        <Route path="/form/:id" element={<BFormView />} />
        <Route path="*" element={<BForms />} />
      </Routes>
    </BrowserRouter>
  );
}