import { Link } from "react-router-dom";
import { ArrowRight, Gavel, BookOpen, AlertTriangle, Scale, School, Users } from "lucide-react";

export function RipostArticle() {
  return (
    <>
      <main className="section container" style={{ maxWidth: 860 }}>

        {/* Breadcrumb */}
        <nav style={{ marginBottom: "2rem", fontSize: "0.85rem", color: "var(--ae-muted)" }}>
          <Link to="/etablissement/actualites" style={{ color: "var(--ae-red)", textDecoration: "none", fontWeight: 600 }}>
            ← Actualités
          </Link>
        </nav>

        {/* Hero */}
        <div style={{ marginBottom: "3rem" }}>
          <span style={{
            display: "inline-block",
            background: "var(--ae-red)",
            color: "white",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "0.3rem 0.8rem",
            borderRadius: "4px",
            marginBottom: "1rem"
          }}>
            Décryptage légal · Juin 2026
          </span>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", lineHeight: 1.25, marginBottom: "1rem" }}>
            Projet de loi RIPOST 2026 : ce que les établissements scolaires doivent vraiment comprendre
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--ae-muted)", lineHeight: 1.7 }}>
            Un texte qui concerne indirectement les collèges et lycées
          </p>
        </div>

        {/* Alerte intro */}
        <div style={{
          background: "#fff1f2",
          borderLeft: "4px solid var(--ae-red)",
          borderRadius: "0 8px 8px 0",
          padding: "1.25rem 1.5rem",
          marginBottom: "3rem",
          display: "flex",
          gap: "1rem",
          alignItems: "flex-start"
        }}>
          <AlertTriangle size={20} style={{ color: "var(--ae-red)", flexShrink: 0, marginTop: "2px" }} />
          <p style={{ margin: 0, lineHeight: 1.6, fontSize: "0.95rem" }}>
            <strong>À noter :</strong> Contrairement à certaines formulations qui circulent, RIPOST n'est pas une loi scolaire de prévention. Son objectif principal est <strong>sécuritaire et pénal</strong> : apporter une réponse plus rapide et plus ferme à des comportements jugés dangereux pour la sécurité publique.
          </p>
        </div>

        {/* Section 1 */}
        <section style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div style={{ background: "#f3f4f6", borderRadius: "8px", padding: "0.5rem" }}>
              <Scale size={20} style={{ color: "var(--ae-red)" }} />
            </div>
            <h2 style={{ fontSize: "1.3rem", margin: 0 }}>Qu'est-ce que RIPOST ?</h2>
          </div>
          <div style={{ lineHeight: 1.8, color: "var(--ae-text)" }}>
            <p>
              Le projet de loi RIPOST, pour <em>"Réponses immédiates aux phénomènes troublant l'ordre public, la sécurité et la tranquillité de nos concitoyens"</em>, a été présenté par le Gouvernement en mars 2026. Il vise plusieurs phénomènes considérés comme sources de troubles à l'ordre public : rodéos motorisés, rassemblements festifs interdits, mortiers d'artifice, squats, stupéfiants, criminalité organisée, mais aussi <strong>usage détourné du protoxyde d'azote</strong>.
            </p>
            <p>
              Le ministère de l'Intérieur présente ce dernier point comme un enjeu majeur, notamment parce qu'il touche directement la jeunesse.
            </p>
            <p>
              Pour les établissements scolaires, l'enjeu est le suivant : RIPOST ne remplace pas la politique de prévention déjà prévue par le Code de l'éducation, mais il rend cette prévention beaucoup plus urgente.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div style={{ background: "#f3f4f6", borderRadius: "8px", padding: "0.5rem" }}>
              <Gavel size={20} style={{ color: "var(--ae-red)" }} />
            </div>
            <h2 style={{ fontSize: "1.3rem", margin: 0 }}>Ce que RIPOST prévoit sur le protoxyde d'azote</h2>
          </div>
          <div style={{ lineHeight: 1.8, color: "var(--ae-text)" }}>
            <p>
              Le protoxyde d'azote (proto, gaz hilarant, ballon) est un gaz à l'origine utilisé en médecine et en cuisine. Son usage détourné peut entraîner des risques graves : perte de connaissance, vertiges, chutes, brûlures, manque d'oxygène, troubles neurologiques et cognitifs, anxiété, dépression ou addiction.
            </p>
          </div>

          {/* Tableau des sanctions */}
          <div style={{ overflowX: "auto", marginTop: "1.5rem", marginBottom: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "#0b0b0b", color: "white" }}>
                  <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontWeight: 600 }}>Infraction</th>
                  <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontWeight: 600 }}>Prison</th>
                  <th style={{ padding: "0.85rem 1rem", textAlign: "left", fontWeight: 600 }}>Amende</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { act: "Inhalation hors cadre médical", prison: "1 an", amende: "3 750 €" },
                  { act: "Amende forfaitaire délictuelle", prison: "—", amende: "200 € (minoré 150 €, majoré 450 €)" },
                  { act: "Violation des interdictions de vente", prison: "2 ans", amende: "15 000 €" },
                  { act: "Vente/cession à des mineurs ou en milieu scolaire", prison: "Peines aggravées", amende: "Peines aggravées" },
                  { act: "Provocation à l'usage (mineurs / milieu scolaire)", prison: "Peines aggravées", amende: "Peines aggravées" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #e5e7eb", background: i % 2 === 0 ? "#fafafa" : "white" }}>
                    <td style={{ padding: "0.85rem 1rem", fontWeight: 500 }}>{row.act}</td>
                    <td style={{ padding: "0.85rem 1rem", color: "var(--ae-red)", fontWeight: 600 }}>{row.prison}</td>
                    <td style={{ padding: "0.85rem 1rem" }}>{row.amende}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ lineHeight: 1.8, color: "var(--ae-text)" }}>
            <p>
              Le projet vise aussi la <strong>provocation à l'usage détourné</strong> : présenter favorablement l'inhalation ou provoquer directement à cet usage pourrait être sanctionné, avec des peines aggravées si cela vise un mineur ou se produit dans un établissement d'enseignement.
            </p>
            <p>
              Enfin, le texte prévoit la possibilité de <strong>fermer administrativement</strong> des commerces qui participeraient illégalement à la commercialisation.
            </p>
          </div>
        </section>

        {/* Section 3 - Ce qui existe déjà */}
        <section style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div style={{ background: "#f3f4f6", borderRadius: "8px", padding: "0.5rem" }}>
              <BookOpen size={20} style={{ color: "var(--ae-red)" }} />
            </div>
            <h2 style={{ fontSize: "1.3rem", margin: 0 }}>Ce qui existe déjà avant RIPOST</h2>
          </div>
          <div style={{ lineHeight: 1.8, color: "var(--ae-text)" }}>
            <p>Depuis la <strong>loi du 1er juin 2021</strong>, le droit encadre déjà le protoxyde d'azote :</p>
            <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>Vente ou offre aux <strong>mineurs interdite</strong>, quel que soit le conditionnement</li>
              <li>Vente interdite dans les <strong>débits de boissons et de tabac</strong>, même à des majeurs</li>
              <li>Vente d'accessoires pour extraire le gaz à des fins psychoactives <strong>interdite</strong></li>
              <li>Violation de ces interdictions : <strong>3 750 € d'amende</strong></li>
            </ul>
            <p style={{ marginTop: "1rem" }}>
              Ce que RIPOST cherche à changer, c'est l'intensité de la réponse : passer d'un encadrement de la vente à une réponse plus large visant l'usage, le transport, la provocation et la conduite.
            </p>
          </div>
        </section>

        {/* Section 4 - Établissements */}
        <section style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div style={{ background: "#f3f4f6", borderRadius: "8px", padding: "0.5rem" }}>
              <School size={20} style={{ color: "var(--ae-red)" }} />
            </div>
            <h2 style={{ fontSize: "1.3rem", margin: 0 }}>Ce que cela change pour les établissements</h2>
          </div>
          <div style={{ lineHeight: 1.8, color: "var(--ae-text)" }}>
            <p>
              Le Code de l'éducation impose déjà qu'une <strong>information sur les conduites addictives</strong> soit délivrée dans les collèges et lycées au moins une fois par an. Cette obligation existe indépendamment de RIPOST.
            </p>
            <p>
              Mais une seule séance générale ne suffit souvent pas. Une prévention efficace doit permettre aux élèves de comprendre les risques réels, déconstruire les idées reçues, reconnaître une situation dangereuse, savoir quoi faire si un camarade fait un malaise.
            </p>

            {/* Bloc 2 séances */}
            <div style={{
              background: "#f8fafc",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "1.5rem",
              margin: "1.5rem 0"
            }}>
              <p style={{ fontWeight: 700, marginBottom: "0.75rem", fontSize: "1rem" }}>📅 Deux séances par an : obligation ou bonne pratique ?</p>
              <p style={{ margin: 0, fontSize: "0.95rem" }}>
                À ce jour, les sources officielles ne confirment pas que RIPOST impose deux séances obligatoires par an. La formulation exacte : <strong>le Code de l'éducation impose au moins une séance annuelle</strong>. En revanche, organiser deux temps de prévention est une excellente pratique :
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.95rem" }}>
                <li><strong>1re séance :</strong> faits, risques, droit, sanctions, sécurité routière, appel aux secours</li>
                <li><strong>2e séance :</strong> situations concrètes, pression de groupe, réseaux sociaux, orientation vers des ressources</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 - 5 dimensions */}
        <section style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <div style={{ background: "#f3f4f6", borderRadius: "8px", padding: "0.5rem" }}>
              <Users size={20} style={{ color: "var(--ae-red)" }} />
            </div>
            <h2 style={{ fontSize: "1.3rem", margin: 0 }}>Une intervention efficace : 5 dimensions</h2>
          </div>
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {[
              { num: "01", title: "Santé", desc: "Malaise, chute, brûlure, manque d'oxygène, atteintes neurologiques, troubles cognitifs, dépendance." },
              { num: "02", title: "Juridique", desc: "Interdictions existantes, durcissement prévu par RIPOST, sanctions liées à la vente, l'usage, la provocation et la conduite." },
              { num: "03", title: "Mécanismes sociaux", desc: "Effet de groupe, défi, imitation, réseaux sociaux, banalisation, fausse impression de contrôle." },
              { num: "04", title: "Bons réflexes", desc: "Ne pas laisser seul, vérifier la respiration, appeler les secours, prévenir un adulte en cas de malaise ou perte de connaissance." },
              { num: "05", title: "Solutions d'aide", desc: "Infirmier scolaire, CPE, Maison des adolescents, CJC, CSAPA, médecin traitant." },
            ].map((item) => (
              <div key={item.num} style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "1.25rem",
                display: "flex",
                gap: "1rem"
              }}>
                <span style={{ color: "var(--ae-red)", fontWeight: 800, fontSize: "1.1rem", flexShrink: 0 }}>{item.num}</span>
                <div>
                  <p style={{ fontWeight: 700, margin: "0 0 0.35rem" }}>{item.title}</p>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--ae-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section - Position Alert'Élèves */}
        <section style={{
          background: "linear-gradient(135deg, #0b0b0b 0%, #1a1a1a 100%)",
          color: "white",
          borderRadius: "16px",
          padding: "2.5rem",
          marginBottom: "3rem"
        }}>
          <h2 style={{ fontSize: "1.3rem", marginBottom: "1.25rem", color: "white" }}>
            La position d'Alert'Élèves
          </h2>
          <p style={{ lineHeight: 1.8, opacity: 0.85, marginBottom: "1rem" }}>
            Alert'Élèves considère que le durcissement juridique autour du protoxyde d'azote doit être compris par les établissements, les familles et les élèves. Mais une loi, seule, ne suffit pas à changer les comportements.
          </p>
          <p style={{ lineHeight: 1.8, opacity: 0.85, marginBottom: "1rem" }}>
            L'objectif n'est pas de faire peur pour faire peur. L'objectif est de donner aux élèves une lecture claire : comprendre le risque, reconnaître les pièges, savoir refuser, savoir aider, et savoir vers qui se tourner.
          </p>
          <p style={{ lineHeight: 1.8, opacity: 0.85, margin: 0 }}>
            Face aux nouveaux usages à risque, les établissements doivent construire une <strong style={{ color: "white" }}>prévention vivante, régulière, documentée et crédible</strong>. C'est exactement là que des interventions spécialisées peuvent avoir un rôle utile.
          </p>
        </section>

        {/* Sources */}
        <section style={{
          borderTop: "1px solid #e5e7eb",
          paddingTop: "2rem",
          marginBottom: "3rem"
        }}>
          <p style={{ fontSize: "0.82rem", color: "var(--ae-muted)", lineHeight: 1.7 }}>
            <strong>Sources :</strong> Dossier législatif du projet de loi RIPOST à l'Assemblée nationale · Sénat (texte adopté le 26 mai 2026) · Ministère de l'Intérieur · Code de l'éducation · Code de la santé publique · Légifrance · Informations publiques du Gouvernement sur le protoxyde d'azote.
          </p>
        </section>

        {/* CTA bas de page */}
        <div style={{
          background: "#fff1f2",
          borderRadius: "16px",
          padding: "2rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem"
        }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.4rem" }}>Besoin d'une intervention dans votre établissement ?</p>
            <p style={{ margin: 0, color: "var(--ae-muted)", fontSize: "0.95rem" }}>Nos sessions sont adaptées à chaque niveau et conformes au cadre légal.</p>
          </div>
          <Link
            to="/etablissement/interventions"
            style={{
              background: "var(--ae-red)",
              color: "white",
              padding: "0.85rem 1.75rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              whiteSpace: "nowrap",
              flexShrink: 0
            }}
          >
            Voir nos interventions <ArrowRight size={16} />
          </Link>
        </div>

      </main>
    </>
  );
}
