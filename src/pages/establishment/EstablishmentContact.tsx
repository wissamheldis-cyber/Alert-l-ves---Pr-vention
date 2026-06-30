import { useState } from "react";
import { Button } from "../../components/Button";
import { Mail, Phone, CheckCircle, AlertCircle, Loader } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function EstablishmentContact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xvgovjpb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <main className="section container">
        <div className="split">
          <div className="split-dark">
            <p className="kicker">Contact</p>
            <h1 className="h2">Demander une intervention<span className="red-dot">.</span></h1>
            <ul style={{ lineHeight: 2, color: "rgba(255,255,255,.78)", marginBottom: "3rem" }}>
              <li>Réponse sous 48h</li>
              <li>Intervention adaptée au niveau</li>
            </ul>

            <div style={{ marginTop: "auto", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }}>
              <h3 style={{ color: "white", marginBottom: "1.5rem" }}>Nous contacter directement</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <a href="mailto:contact@alerteleves.com" style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "white", textDecoration: "none" }}>
                  <Mail size={20} className="red" />
                  <span>contact@alerteleves.com</span>
                </a>
                <a href="tel:+33614766965" style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "white", textDecoration: "none" }}>
                  <Phone size={20} className="red" />
                  <span>06 14 76 69 65</span>
                </a>
              </div>
            </div>
          </div>

          <div className="split-panel">

            {/* Succès */}
            {status === "success" && (
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.25rem",
                padding: "3rem 2rem",
                textAlign: "center",
                height: "100%"
              }}>
                <CheckCircle size={56} style={{ color: "var(--ae-red)" }} />
                <h2 style={{ fontSize: "1.5rem", margin: 0 }}>Demande envoyée !</h2>
                <p style={{ color: "var(--ae-muted)", lineHeight: 1.7, maxWidth: 340 }}>
                  Nous avons bien reçu votre message et vous répondrons sous 48h à l'adresse indiquée.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    background: "none",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    padding: "0.6rem 1.4rem",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    color: "var(--ae-text)"
                  }}
                >
                  Envoyer une autre demande
                </button>
              </div>
            )}

            {/* Formulaire */}
            {status !== "success" && (
              <form className="form" onSubmit={handleSubmit}>
                <input
                  className="input"
                  name="etablissement"
                  placeholder="Nom de l'établissement"
                  required
                />
                <input
                  className="input"
                  name="nom"
                  placeholder="Votre nom et prénom"
                  required
                />
                <input
                  className="input"
                  name="fonction"
                  placeholder="Votre fonction"
                  required
                />
                <input
                  className="input"
                  name="email"
                  type="email"
                  placeholder="Email professionnel"
                  required
                />
                <input
                  className="input"
                  name="telephone"
                  type="tel"
                  placeholder="Téléphone"
                />
                <select className="select" name="niveau" defaultValue="" required>
                  <option value="" disabled>Niveau(x) concerné(s)</option>
                  <option>Collège</option>
                  <option>Lycée</option>
                  <option>Collège et lycée</option>
                </select>
                <textarea
                  className="textarea"
                  name="message"
                  placeholder="Votre besoin, contexte, calendrier souhaité..."
                />

                {/* Erreur */}
                {status === "error" && (
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    color: "var(--ae-red)",
                    fontSize: "0.9rem",
                    padding: "0.75rem 1rem",
                    background: "#fff1f2",
                    borderRadius: "8px"
                  }}>
                    <AlertCircle size={16} />
                    Une erreur est survenue. Veuillez réessayer ou nous contacter directement par mail.
                  </div>
                )}

                <Button type="submit" disabled={status === "loading"}>
                  {status === "loading" ? (
                    <span style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <Loader size={16} style={{ animation: "spin 1s linear infinite" }} />
                      Envoi en cours…
                    </span>
                  ) : (
                    "Envoyer ma demande"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </>
  );
}
