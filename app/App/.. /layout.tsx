export const metadata = {
  title: "Fantômes",
  description: "Retrouve les abonnements que tu paies sans les utiliser",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
