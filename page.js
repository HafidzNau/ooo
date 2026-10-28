// Ubah data di bawah ini untuk memperbarui isi halaman.
const profile = {
  name: ["Hafidz", "Naufal", "Akbar"],
  birth: "Jakarta, 14 Mei 2006",
  campus: "Binus University",
  school: "SMK — Rekayasa Perangkat Lunak",
  email: "hafidz@example.com", // ganti dengan email Anda
  instagram: "https://instagram.com/", // ganti dengan akun Anda
  linkedin: "https://linkedin.com/in/", // ganti dengan profil Anda
  github: "https://github.com/", // ganti dengan akun Anda
};

const journey = [
  {
    title: "Lahir di Jakarta",
    meta: "14 Mei 2006",
    text: "Tumbuh dan besar di Jakarta, kota tempat semua perjalanan belajar ini dimulai.",
  },
  {
    title: "SMK Rekayasa Perangkat Lunak",
    meta: "Pendidikan menengah kejuruan",
    text: "Mengenal dunia pemrograman sejak dini: logika, pengembangan aplikasi, dan membangun produk digital dari nol.",
  },
  {
    title: "Mahasiswa Binus University",
    meta: "Pendidikan tinggi",
    text: "Melanjutkan studi di Binus University dan memperdalam teknologi informasi dalam lingkungan akademik yang kolaboratif.",
  },
];

const roles = [
  {
    title: "Aktivis HIMSISFO",
    meta: "Himpunan Sistem Informasi",
    text: "Terlibat dalam kegiatan himpunan: merancang program, bekerja dalam tim, dan membangun komunitas mahasiswa Sistem Informasi.",
  },
  {
    title: "Education Counselor",
    meta: "Binus University",
    text: "Mendampingi calon mahasiswa dalam mengenal program studi, proses pendaftaran, dan kehidupan kampus di Binus University.",
  },
];

const skills = ["Pengembangan web", "Next.js", "React", "JavaScript", "HTML & CSS", "Kerja tim", "Public speaking", "Organisasi"];

export default function Home() {
  return (
    <>
      <header className="nav">
        <a href="#atas" className="brand">HNA</a>
        <nav aria-label="Navigasi utama">
          <a href="#tentang">Tentang</a>
          <a href="#perjalanan">Perjalanan</a>
          <a href="#peran">Peran</a>
          <a href="#kontak">Kontak</a>
        </nav>
      </header>

      <main id="atas">
        <section className="hero">
          <div className="hero-text">
            <p className="hero-kicker">Portofolio</p>
            <h1 aria-label={profile.name.join(" ")}>
              {profile.name.map((w, i) => (
                <span key={w} className="line" style={{ "--i": i }} aria-hidden="true">
                  {w}
                </span>
              ))}
            </h1>
            <p className="hero-sub">
              Mahasiswa {profile.campus}, aktivis HIMSISFO, dan Education
              Counselor. Lulusan SMK Rekayasa Perangkat Lunak yang senang
              membangun hal berguna dengan kode.
            </p>
            <div className="actions">
              <a className="btn primary" href="#kontak">Hubungi saya</a>
              <a className="btn" href="#perjalanan">Lihat perjalanan</a>
            </div>
          </div>

          <aside className="idcard" aria-label="Kartu identitas">
            <div className="idcard-top">
              <span>{profile.campus}</span>
              <span className="chip" aria-hidden="true" />
            </div>
            <div className="avatar" aria-hidden="true">HNA</div>
            <dl>
              <div><dt>Nama</dt><dd>Hafidz Naufal Akbar</dd></div>
              <div><dt>Lahir</dt><dd>{profile.birth}</dd></div>
              <div><dt>Status</dt><dd>Mahasiswa</dd></div>
              <div><dt>Asal sekolah</dt><dd>{profile.school}</dd></div>
            </dl>
          </aside>
        </section>

        <section id="tentang" className="section two-col">
          <h2>Tentang saya</h2>
          <div>
            <p className="lead">
              Saya Hafidz Naufal Akbar, lahir di Jakarta pada 14 Mei 2006.
              Saya memulai dunia teknologi dari bangku SMK jurusan Rekayasa
              Perangkat Lunak, lalu melanjutkan kuliah di Binus University.
            </p>
            <p>
              Di luar kelas, saya aktif di Himpunan Sistem Informasi
              (HIMSISFO) dan menjadi Education Counselor, dua peran yang
              melatih saya berkomunikasi, memimpin, dan membantu orang lain
              menemukan jalannya.
            </p>
            <ul className="tags" aria-label="Keahlian">
              {skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="perjalanan" className="section two-col">
          <h2>Perjalanan</h2>
          <ol className="timeline">
            {journey.map((j, i) => (
              <li key={j.title}>
                <span className="step">{i + 1}</span>
                <div>
                  <h3>{j.title}</h3>
                  <p className="meta">{j.meta}</p>
                  <p>{j.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="peran" className="section two-col">
          <h2>Peran saat ini</h2>
          <div className="roles">
            {roles.map((r) => (
              <article key={r.title}>
                <h3>{r.title}</h3>
                <p className="meta">{r.meta}</p>
                <p>{r.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="kontak" className="section contact">
          <h2>Mari terhubung</h2>
          <p className="lead">
            Punya pertanyaan tentang kuliah di Binus, himpunan, atau ingin
            berkolaborasi? Kirim pesan kapan saja.
          </p>
          <a className="btn primary big" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <ul className="links">
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href={profile.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Hafidz Naufal Akbar</p>
      </footer>
    </>
  );
}
