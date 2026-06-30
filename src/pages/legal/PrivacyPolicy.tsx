import { Helmet } from "react-helmet-async";

export function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité - Alert’Élèves</title>
        <meta name="description" content="Politique de Confidentialité et gestion des données personnelles du site Alert’Élèves." />
      </Helmet>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div>
          <h1 style={{ marginBottom: "0.5rem" }}>Politique de Confidentialité</h1>
          <p style={{ color: "var(--ae-text)", fontSize: "0.95rem" }}>En vigueur au {new Date().toLocaleDateString("fr-FR")}</p>
        </div>

        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2>1. Introduction</h2>
          <p>
            La présente politique de confidentialité a pour but de vous informer sur la manière dont <strong>Alert’Élèves</strong> (ci-après "nous") collecte, utilise et protège vos données personnelles lorsque vous naviguez sur le site <em>alerteleves.com</em>.
          </p>
          <p>
            Nous nous engageons à ce que la collecte et le traitement de vos données soient conformes au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
          </p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2>2. Données collectées</h2>
          <p>
            Dans le cadre de votre utilisation de notre site, nous pouvons être amenés à collecter les données suivantes :
          </p>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li><strong>Données de contact :</strong> Lorsque vous utilisez un formulaire de contact pour demander une intervention, nous collectons votre nom, prénom, adresse e-mail, numéro de téléphone, le nom de votre établissement, et le contenu de votre message.</li>
            <li><strong>Données de navigation (Anonymes) :</strong> Données techniques liées à votre navigation (adresse IP anonymisée, type de navigateur, pages visitées) afin d'améliorer l'expérience utilisateur, via des cookies statistiques strictement nécessaires.</li>
          </ul>
          <p>
            <strong>Note importante pour l'Espace Élèves :</strong> Nous ne collectons <strong>aucune donnée personnelle</strong> (nom, prénom, âge) sur les élèves qui consultent les fiches prévention ou réalisent les quiz. Les quiz sont totalement anonymes et ne nécessitent pas de création de compte.
          </p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2>3. Finalités du traitement</h2>
          <p>
            Les données personnelles que nous collectons sont utilisées exclusivement pour les finalités suivantes :
          </p>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li>Traiter vos demandes de contact et établir des devis pour des interventions.</li>
            <li>Gérer la relation commerciale et le suivi administratif avec les établissements (facturation, organisation).</li>
            <li>Améliorer le fonctionnement et la sécurité du site internet.</li>
          </ul>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2>4. Conservation et Partage des données</h2>
          <p>
            Vos données personnelles sont conservées uniquement le temps nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, conformément aux obligations légales (ex: conservation des factures pendant 10 ans).
          </p>
          <p>
            <strong>Aucune revente :</strong> Nous nous interdisons formellement de vendre, louer, ou céder vos données personnelles à des tiers. Elles sont destinées exclusivement à l'usage d'Alert’Élèves. 
          </p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2>5. Sécurité de vos données</h2>
          <p>
            Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour assurer la sécurité de vos données personnelles et prévenir toute perte, altération ou accès non autorisé (utilisation du protocole HTTPS, hébergement sécurisé chez Vercel).
          </p>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h2>6. Vos droits (RGPD)</h2>
          <p>
            Conformément à la réglementation applicable, vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li>Droit d'accès, de rectification et de suppression.</li>
            <li>Droit de limitation et d'opposition au traitement.</li>
            <li>Droit à la portabilité de vos données.</li>
          </ul>
          <p>
            Pour exercer ces droits, vous pouvez nous contacter par e-mail à l'adresse suivante : <strong><a href="mailto:contact@alerteleves.com" style={{ color: "var(--ae-black)" }}>contact@alerteleves.com</a></strong>. Nous vous répondrons dans un délai d'un mois maximum.
          </p>
          <p>
            Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (www.cnil.fr).
          </p>
        </section>
      </div>
    </>
  );
}
