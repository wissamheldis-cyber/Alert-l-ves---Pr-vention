import { Helmet } from "react-helmet-async";

export function MentionsLegales() {
  return (
    <>
      <Helmet>
        <title>Mentions Légales - Alert’Élèves</title>
        <meta name="description" content="Mentions légales du site Alert’Élèves." />
      </Helmet>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div>
          <h1 style={{ marginBottom: "0.5rem" }}>Mentions Légales</h1>
          <p style={{ color: "var(--ae-text)", fontSize: "0.95rem" }}>En vigueur au {new Date().toLocaleDateString("fr-FR")}</p>
        </div>

        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2>1. Éditeur du site</h2>
          <p>
            Le site <strong>Alert’Élèves</strong> (accessible à l'adresse alerteleves.com) est édité par :<br /><br />
            <strong>Anass Abdel Rahman (A.R)</strong><br />
            Statut juridique : Entrepreneur individuel<br />
            Adresse e-mail : <a href="mailto:contact@alerteleves.com" style={{ color: "var(--ae-black)", fontWeight: 600 }}>contact@alerteleves.com</a><br />
            Directeur de la publication : Anass Abdel Rahman
          </p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2>2. Hébergement du site</h2>
          <p>
            Le site est hébergé par :<br /><br />
            <strong>Vercel Inc.</strong><br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789<br />
            États-Unis<br />
            Contact : <a href="https://vercel.com/contact" target="_blank" rel="noopener noreferrer" style={{ color: "var(--ae-black)", fontWeight: 600 }}>vercel.com/contact</a>
          </p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2>3. Propriété intellectuelle</h2>
          <p>
            L’ensemble de ce site relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p>
            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication. Toute utilisation non autorisée des contenus (textes, images, structure) sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
          </p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2>4. Limitation de responsabilité</h2>
          <p>
            L'éditeur s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
          </p>
          <p>
            Le contenu médical ou scientifique présent sur le site (notamment dans l'Espace Élèves) est fourni à titre informatif et de prévention. Il ne se substitue en aucun cas à un avis médical professionnel. En cas d'urgence médicale, contactez le 15 ou le 112.
          </p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2>5. Droit applicable et attribution de juridiction</h2>
          <p>
            Tout litige en relation avec l’utilisation du site Alert’Élèves est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de la ville du siège social de l'éditeur.
          </p>
        </section>
      </div>
    </>
  );
}
