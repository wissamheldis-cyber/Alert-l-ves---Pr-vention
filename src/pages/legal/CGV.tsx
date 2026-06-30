import { Helmet } from "react-helmet-async";

export function CGV() {
  return (
    <>
      <Helmet>
        <title>Conditions Générales de Vente (CGV) - Alert’Élèves</title>
        <meta name="description" content="Conditions Générales de Vente des interventions Alert’Élèves." />
      </Helmet>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div>
          <h1 style={{ marginBottom: "0.5rem" }}>Conditions Générales de Vente (CGV)</h1>
          <p style={{ color: "var(--ae-text)", fontSize: "0.95rem" }}>Applicables aux professionnels (B2B) - En vigueur au {new Date().toLocaleDateString("fr-FR")}</p>
        </div>

        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2>Article 1 - Objet et champ d'application</h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) constituent le socle de la négociation commerciale et sont systématiquement adressées ou remises à chaque acheteur professionnel (ci-après "le Client" ou "l'Établissement") pour lui permettre de passer commande.
          </p>
          <p>
            Elles s'appliquent sans restriction ni réserve à toutes les prestations de services d'intervention, de sensibilisation et de prévention proposées par <strong>Anass Abdel Rahman (EI) - Alert’Élèves</strong> (ci-après "le Prestataire"). Toute commande implique l'acceptation sans réserve des présentes CGV.
          </p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2>Article 2 - Devis et Commandes</h2>
          <p>
            Toute prestation de prévention fait l'objet d'un devis préalable, gratuit et sans engagement, établi par le Prestataire sur la base des besoins exprimés par l'Établissement.
          </p>
          <p>
            La commande n'est définitivement confirmée qu'après acceptation du devis par le Client, matérialisée par la signature du devis (avec la mention "Bon pour accord") ou la signature d'une convention de prestation de services, accompagnée du paiement d'un acompte si celui-ci est spécifié sur le devis.
          </p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2>Article 3 - Tarifs et Modalités de paiement</h2>
          <p>
            Les tarifs des interventions sont indiqués en euros (€) et hors taxes (HT). Le Prestataire, bénéficiant de la franchise en base de TVA (art. 293 B du CGI), la TVA est non applicable. 
          </p>
          <p>
            Sauf accord particulier inscrit sur le devis, le règlement s'effectue dans un délai de 30 jours calendaires à compter de la date d'émission de la facture. Les paiements se font par virement bancaire aux coordonnées indiquées sur la facture.
          </p>
          <p>
            En cas de retard de paiement, des pénalités de retard calculées sur la base de 3 fois le taux d'intérêt légal en vigueur seront exigibles le jour suivant la date de règlement figurant sur la facture, ainsi qu'une indemnité forfaitaire pour frais de recouvrement de 40 euros (art. D. 441-5 du Code de commerce).
          </p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2>Article 4 - Conditions d'annulation et de report</h2>
          <p>
            Toute annulation ou demande de report d'une intervention par le Client doit être notifiée par écrit (e-mail) au Prestataire.
          </p>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li><strong>Annulation à plus de 15 jours</strong> de la date prévue : aucune pénalité. L'acompte éventuellement versé sera restitué ou conservé pour une date ultérieure.</li>
            <li><strong>Annulation entre 14 jours et 7 jours</strong> avant la date prévue : 30% du montant total TTC de la prestation annulée sera facturé à titre d'indemnité.</li>
            <li><strong>Annulation à moins de 7 jours</strong> de la date prévue : l'intégralité du montant de la prestation sera facturée et due par le Client.</li>
          </ul>
          <p>
            En cas d'annulation du fait du Prestataire (force majeure, maladie), celui-ci s'engage à proposer de nouvelles dates d'intervention dans les meilleurs délais. Si aucun report n'est possible, le Client sera intégralement remboursé des sommes déjà versées.
          </p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2>Article 5 - Obligations et Responsabilités</h2>
          <p>
            <strong>Obligations du Prestataire :</strong> Le Prestataire s'engage à mener à bien la mission qui lui est confiée conformément aux règles de l'art et à la meilleure de ses capacités. Il est soumis à une obligation de moyens et non de résultats, la sensibilisation dépendant également de la réceptivité du public.
          </p>
          <p>
            <strong>Obligations du Client :</strong> L'Établissement s'engage à mettre à disposition du Prestataire les conditions matérielles nécessaires au bon déroulement de l'intervention (salle, matériel de projection si convenu, encadrement des élèves par le personnel de l'établissement). Le maintien de la discipline lors de l'intervention reste sous la responsabilité du personnel de l'Établissement.
          </p>
          <p>
            La responsabilité du Prestataire ne saurait être engagée pour des dommages indirects, préjudices moraux ou financiers subis par le Client ou des tiers.
          </p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2>Article 6 - Propriété intellectuelle des supports</h2>
          <p>
            Le Prestataire conserve l'intégralité des droits de propriété intellectuelle sur les supports de présentation, livrets, quiz, et méthodologies utilisés lors des interventions. 
          </p>
          <p>
            Toute reproduction, modification, ou diffusion à des tiers de ces supports, qu'ils soient au format physique ou numérique, est strictement interdite sans l'autorisation écrite préalable du Prestataire.
          </p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2>Article 7 - Droit applicable et litiges</h2>
          <p>
            Les présentes CGV sont soumises à la loi française. En cas de litige, les parties s'engagent à rechercher une solution à l'amiable avant toute action judiciaire. 
          </p>
          <p>
            À défaut de résolution amiable, tout litige relatif à l'interprétation ou à l'exécution des présentes sera de la compétence exclusive du Tribunal de Commerce de la ville du siège social du Prestataire.
          </p>
        </section>
      </div>
    </>
  );
}
