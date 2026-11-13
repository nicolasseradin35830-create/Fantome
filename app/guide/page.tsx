export default function Guide() {
  return (
    <main style={{ maxWidth: 560, margin: "0 auto", padding: 24, fontFamily: "system-ui, sans-serif", lineHeight: 1.5 }}>
      <h1>Merci ! Voici votre audit des abonnements</h1>
      <p>Suivez ces 5 étapes dans l’ordre. Comptez environ 30 minutes.</p>

      <h2>1. Récupérez vos 3 derniers mois de relevés</h2>
      <p>Connectez-vous à l’espace de votre banque et affichez vos relevés des 3 derniers mois, pour chaque compte et chaque carte que vous utilisez.</p>

      <h2>2. Repérez les prélèvements qui reviennent</h2>
      <p>Cherchez les lignes qui apparaissent chaque mois, ou chaque année, avec le même montant ou presque. Notez pour chacune : le nom, le montant et la date.</p>

      <h2>3. Posez-vous une question pour chaque ligne</h2>
      <p>Ai-je utilisé ce service ces 30 derniers jours ? Si la réponse est non, ou si vous ne reconnaissez pas le nom, c’est un abonnement fantôme à vérifier.</p>

      <h2>4. Retrouvez ce que c’est</h2>
      <p>Recherchez le nom exact du prélèvement sur internet. Cherchez aussi dans vos e-mails les mots « abonnement », « facture » ou « renouvellement », et vérifiez les abonnements liés à votre téléphone (boutiques d’applications).</p>

      <h2>5. Résiliez</h2>
      <p>Connectez-vous à l’espace client du service et cherchez « Mon abonnement » ou « Résilier ». Gardez la confirmation (capture d’écran ou e-mail). Si vous ne trouvez pas comment faire, écrivez au service client pour demander la résiliation. Si le prélèvement continue, contactez votre banque pour qu’elle vous aide à l’arrêter.</p>

      <h2>Calculez votre économie</h2>
      <p>Additionnez les montants mensuels des abonnements résiliés, puis multipliez par 12 : c’est ce que vous économisez sur un an.</p>
            <h2>Lettre de résiliation prête à copier</h2>
        <p>Remplacez les mots entre crochets, puis envoyez la lettre par e-mail au service client.</p>
        <div style={{ background: "#f4f4f4", padding: 16, borderRadius: 8 }}>
          <p>Objet : Demande de résiliation de mon abonnement</p>
          <p>Madame, Monsieur,</p>
          <p>Je souhaite résilier mon abonnement [nom du service], souscrit avec l’adresse e-mail [votre e-mail] (numéro de client : [numéro, si vous l’avez]).</p>
          <p>Merci de prendre en compte cette résiliation dès réception de ce message, de stopper tout prélèvement futur et de me confirmer la résiliation par e-mail, avec la date de fin effective.</p>
          <p>Dans l’attente de votre confirmation, je vous prie d’agréer, Madame, Monsieur, mes salutations distinguées.</p>
          <p>[Votre nom] – [Date]</p>
        </div></main>
  );
}
