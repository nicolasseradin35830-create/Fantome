
export default function Home() {
  return (
    <main style={{ maxWidth: 480, margin: "0 auto", padding: 24, fontFamily: "system-ui, sans-serif", textAlign: "center" }}>
      <h1 style={{ fontSize: 32 }}>Fantômes</h1>
      <p style={{ fontSize: 18 }}>Retrouve les abonnements que tu paies sans les utiliser.</p>
      <p style={{ fontSize: 44, fontWeight: "bold", margin: "24px 0 4px" }}>19 €</p>
      <p style={{ marginTop: 0 }}>Audit complet, une seule fois</p>
      <button style={{ fontSize: 18, padding: "14px 28px", background: "#111", color: "#fff", border: "none", borderRadius: 8 }}>
        Payer 19 €
      </button>
    </main>
  );
}
