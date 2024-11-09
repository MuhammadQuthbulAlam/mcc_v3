import HeroImage from "../assets/images/MCC.jpg";
import AboutImage from "../assets/images/MCC2.jpg";
import org from "../assets/images/struktur.png";
import desa1 from "../assets/images/Desa/Borogojol.png";
import desa_2 from "../assets/images/Desa/Payung.png";
import desa_3 from "../assets/images/Desa/Cicenang.png";
import desa_4 from "../assets/images/Desa/Cisambeng.png";
import desa_5 from "../assets/images/Desa/Jatisur.png";
import desa_6 from "../assets/images/Desa/Leuwilaja.png";
import desa_7 from "../assets/images/Desa/Nanggerang.png";
import desa_8 from "../assets/images/Desa/Nunuk.png";
import desa_9 from "../assets/images/Desa/Pasiripis.png";
import desa_10 from "../assets/images/Desa/Putri Dalem.png";
import desa_11 from "../assets/images/Desa/Rajagaluh Kidul.png";
import desa12 from "../assets/images/Desa/Cimuncang.png";
// PPTX
import pptx_1 from "../assets/images/Gedung/1.1.jpg";
import pptx_2 from "../assets/images/Gedung/1.2.jpg";
import pptx_3 from "../assets/images/Gedung/1.3.jpg";
import pptx_4 from "../assets/images/Gedung/1.4.jpg";
import pptx_5 from "../assets/images/Gedung/1.5.jpg";
import pptx_6 from "../assets/images/Gedung/1.6.jpg";
import pptx_7 from "../assets/images/Gedung/1.7.jpg";
import pptx_8 from "../assets/images/Gedung/1.8.jpg";
import pptx_9 from "../assets/images/Gedung/1.9.jpg";
import pptx_10 from "../assets/images/Gedung/1.10.jpg";
import pptx_11 from "../assets/images/Gedung/1.11.jpg";
import pptx_12 from "../assets/images/Gedung/1.12.jpg";
import pptx_13 from "../assets/images/Gedung/1.13.jpg";
// File
import cimuncang from "../assets/DesaTematik/CIMUNCANG.pdf";
import borogojol from "../assets/DesaTematik/BOROGOJOL.pdf";
import cicenang from "../assets/DesaTematik/CICENANG.pdf";
import cisambeng from "../assets/DesaTematik/CISAMBENG.pdf";
import rajagaluh from "../assets/DesaTematik/RAJAGALUH KIDUL.pdf";
import nunuk from "../assets/DesaTematik/NUNUK.pdf";
import nanggerang from "../assets/DesaTematik/NANGGERANG.pdf";
import payung from "../assets/DesaTematik/PAYUNG.pdf";
import pasiripis from "../assets/DesaTematik/PASIRIPIS.pdf";
import putridalem from "../assets/DesaTematik/PUTRI DALEM.pdf";
import leuwilaja from "../assets/DesaTematik/LEUWILAJA.pdf";
import jatisura from "../assets/DesaTematik/JATISURA.pdf";
import "./Contact.css";
import Swal from "sweetalert2";
// import Model from "react-modal";
// import { useState } from "react";
// Download
import alur_mcc from "../assets/images/alur_mcc.pdf";
{
  /*import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";*/
}
import slide_image_1 from "../assets/images/MCC3.jpg";
import office from "../assets/images/office.jpeg";
import fashion from "../assets/images/gallery-fashion.jpeg";
import workshop from "../assets/images/workshop-office.jpeg";
import art from "../assets/images/gallery-art.jpeg";

const HomePage = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "86f9b95d-65fa-41e0-8912-a7bed2873302");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Berhasil!",
        text: "Pesan Berhasil Terkirim!",
        icon: "success",
      });
    }
  };
  return (
    <div className="homepage pb-10" id="home">
      <div className="container mx-auto px-9 xl:px-20 lg:px-20">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Majalengka
              <span className="font-bold text-sky-400"> Creative Center</span>
            </h1>
            <p className="text-base/8 mb-7 text-justify">
              Gedung Creative Center merupakan bentuk stimulasi yang diberikan
              kepada pelaku kreatif di Jawa Barat, terutama kepada generasi muda
              guna menunjang industri kreatif dalam meningkatkan ekonomi.
            </p>
            <a
              href="#about"
              className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full"
            >
              Tentang Kami <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="md:w-full w-[400px] mx-auto  md:m-0 rounded-lg"
            />
          </div>
        </div>
        {/*About*/}
        <div
          className="about grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:pt-20 pt-32"
          id="about"
        >
          <div className="box md:order-1 order-2">
            <img
              src={AboutImage}
              alt="Aboout Image"
              className="lg:w-[500px] w-[400px] md:m-0 mx-auto rounded-lg"
            />
          </div>
          <div className="pt-20 box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Gedung Majalengka
              <span className="font-bold text-sky-400"> Creative Center</span>
            </h1>
            <p className="text-base/loose text-justify">
              <span className="font-bold">Gedung Creative Center</span> telah
              berdiri di Kabupaten Majalengka. Bangunan yang ditujukan sebagai
              ruang industri kreatif tersebut diresmikan pada 11 Januari 2023.
              Dalam proses peresmian, hadir Menteri Koperasi dan Usaha Kecil
              Menengah Teten Masduki, Wakil Gubernur Jabar Uu Ruzhanul Ulum,
              Bupati Majalengka Karna Sobahi, serta sejumlah tokoh Forkopimda.
              Kegiatan peresmian tersebut juga dihadiri Kepala Dinas Pariwisata
              dan Kebudayaan Provinsi Jawa Barat Benny Bachtiar yang diwakili
              Kepala Bidang Industri Pariwisata Rispiaga. Menurut Menteri
              Koperasi UMKM, keberadaan Gedung Creative Center Majalengka mejadi
              sebuah solusi dari ancaman resesi ekonomi. Masyarakat khususnya
              generasi muda bisa memanfaatkan Gedung Creative Center ini sebagai
              sarana pengembangan industri kreatif serta pemasaran produk-produk
              lokal.
            </p>
          </div>
        </div>

        {/*Struktur Organisasi*/}
        <div className="pt-32" id="organisasi">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-7">
            Komite Ekonomi{" "}
            <span className="font-bold text-sky-400">Kreatif</span>
          </h1>
          <div className="box pt-5">
            <div className="text-center bg-white shadow rounded-lg w-auto h-auto items-center">
              <h1 className="text-center lg:text-3xl/tight text-3xl font-medium mb-7">
                Tentang Komite{" "}
                <span className="font-bold text-sky-400">Ekraf</span>
              </h1>
              <p className="text-center px-2 bg-white shadow rounded-lg w-auto h-auto items-center py-1.5 text-wrap">
                Komite pengembangan ekonomi kreatif majalengka adalah mitra
                lembaga dalam penyusunan kegiatan pengembangan, mengarahkan
                serta mengawal pelaksanaan program aksi pengembangan ekonomi
                kreatif di kabupaten majalengka sesuai dengan keputusan bupati
                majalengka nomor eka.02.01/kep.513-bapedalitbang/2023 Visi:
                Terwujudnya ekonomi kreatif sebagai sektor potensial unggulan
                yang mendukung pertumbuhan ekonomi di kabupaten majalengka.
              </p>
            </div>
          </div>
          {/*Visi & Misi*/}
          <div className="box pt-5" id="visimisi">
            <div className="text-center bg-white shadow rounded-lg w-auto h-auto items-center">
              <h1 className="text-center lg:text-3xl/tight text-3xl font-medium mb-7">
                Visi & Misi{" "}
                <span className="font-bold text-sky-400">Ekraf</span>
              </h1>
              <h3 className="pt-1 text-2xl font-medium text-sky-400">Visi</h3>
              <p className="text-center px-2 text-wrap">
                Terwujudnya ekonomi kreatif sebagai sektor potensial unggulan
                yang mendukung pertumbuhan ekonomi di kabupaten majalengka.
              </p>
              <h3 className="pt-5 text-2xl font-medium text-sky-400">Misi</h3>
              <p className="text-center px-2 text-wrap">
                1. Mengoptimalisasi aktivasi gedung majalengka creative center
                sebagai ruang edukasi kreasi dan ekspresi bagi para pelaku
                ekonomi kreatif di kabupaten majalengka
                <p>
                  2. Mendorong pertumbuhan dan perkembangan ekosistem ekonomi
                  kreatif di kabupaten majalengka
                </p>
                <p>
                  3. Mendorong pemerintah kab majalengka dalam menerbitkan
                  peraturan daerah tentang ekonomi kreatif sebagai payung hukum
                  bagi tumbuh kembangangnya ekosistem ekonomi kreatif di
                  kabupaten majalengka
                </p>
              </p>
            </div>
          </div>
          <h1 className="pt-5 text-center lg:text-3xl/tight text-3xl font-medium mb-7">
            Struktur Organisasi{" "}
            <span className="font-bold text-sky-400">Ekraf</span>
          </h1>
          <img
            src={org}
            alt="Struktur Organisasi"
            className="mt-10 text-center lg:w-[500px] w-[400px] md:m-50 mx-auto rounded-lg shadow"
          />
          <h2 className="mt-10 text-center lg:text-2xl/tight text-1xl font-medium mb-2">
            PERENCANAAN PENGEMBANGAN POTENSI EKONOMI KREATIF KABUPATEN
            MAJALENGKA
          </h2>
          <div className="grid-cols-12">
            <img src={pptx_1} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_2} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_3} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_4} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_5} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_6} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_7} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_8} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_9} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_10} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_11} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_12} alt="1" className="mt-10 rounded-lg" />
            <img src={pptx_13} alt="1" className="mt-10 rounded-lg" />
          </div>
        </div>
        {/*Fasilitas*/}
        <div className="pt-32" id="fasilitas">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-7">
            Fasilitas <span className="font-bold text-sky-400">Ekraf</span>
          </h1>
          <p className="pt-1 text-center">
            Fasilitas Majalengka Creative Center
          </p>
          <div className="fasilitas-box pt-12 grid md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-6">
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={office} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                Ruang Kantor
              </h3>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={fashion} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                gallery Fashion
              </h3>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={art} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                Gallery Lukis
              </h3>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={slide_image_1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                Studio Musik
              </h3>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={slide_image_1} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                Ruang Pameran
              </h3>
            </div>
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={workshop} alt="Profile 1" className="rounded-lg" />
              <h3 className="text-xl text-center font-bold mt-6 mb-2">
                Ruang Workshop
              </h3>
            </div>
          </div>
        </div>

        {/* Alur Pengajuan Gedung MCC */}
        <div className="pt-10">
          <h2 className="text-center lg:text-2xl/tight text-1xl font-medium mb-2">
            Download Alur Pengajuan Gedung Untuk Kegiatan MCC di bawah ini
          </h2>
          <i className="ri-download-cloud-2-line flex px-5 text-3xl justify-center"></i>
          <a href={alur_mcc}>
            <button
              type="submit"
              className="flex px-5 mt-3 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
            >
              Download File
            </button>
          </a>
        </div>
        {/*Desa Kreatif*/}
        <div className="profile pt-32 z-50" id="profile">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
            Desa <span className="font-bold text-sky-400">Tematik</span>
          </h1>
          <p className="text-center">Desa Tematik Kreatif</p>
          <div className="profile-box pt-12 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
            {/* Profile 3 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa1} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Borogojol</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={borogojol}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>
                </button>
              </a>
            </div>
            {/* Profile 3 End*/}
            {/* Profile 3 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa_2} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Payung</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={payung}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>
                </button>
              </a>
            </div>
            {/* Profile 3 End*/}
            {/* Profile 3 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa_3} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Cicenang</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={cicenang}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>
                </button>
              </a>
            </div>
            {/* Profile 3 End*/}
            {/* Profile 3 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa_4} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Cisambeng</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={cisambeng}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>
                </button>
              </a>
            </div>
            {/* Profile 3 End*/}
            {/* Profile 3 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa_5} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Jatisura</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={jatisura}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>{" "}
                </button>
              </a>
            </div>
            {/* Profile 3 End*/}
            {/* Profile 3 Start*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa_6} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Leuwilaja</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={leuwilaja}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>{" "}
                </button>
              </a>
            </div>
            {/* Profile 3 End*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa_7} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Nanggerang</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={nanggerang}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>{" "}
                </button>
              </a>
            </div>
            {/* Profile 3 End*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa_8} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Nunuk Baru</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={nunuk}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>{" "}
                </button>
              </a>
            </div>
            {/* Profile 3 End*/}
            {/* Profile 3 End*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa_9} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Pasiripis</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={pasiripis}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>{" "}
                </button>
              </a>
            </div>
            {/* Profile 3 End*/}
            {/* Profile 3 End*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa_10} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Putri Dalem</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={putridalem}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>{" "}
                </button>
              </a>
            </div>
            {/* Profile 3 End*/}
            {/* Profile 3 End*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa_11} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2 ">
                Desa Rajagaluh Kidul
              </h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={rajagaluh}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>{" "}
                </button>
              </a>
            </div>
            {/* Profile 3 End*/}
            {/* Profile 3 End*/}
            <div className="box p-2 bg-white shadow rounded-lg">
              <img src={desa12} alt="Profile 3" className="rounded-lg" />
              <h3 className="text-xl font-bold mt-6 mb-2">Desa Cimuncang</h3>
              <p className=" text-base/loose">Kab. Majalengka</p>
              <a href={cimuncang}>
                <button
                  type="submit"
                  className="flex px-5 mt-20 mx-auto bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
                >
                  <span className="text-xs">Download File</span>{" "}
                </button>
              </a>
            </div>
            {/* Profile 3 End*/}
          </div>
        </div>
        {/*Kontak*/}
        <div className="kontak pt-24" id="kontak">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
            Kontak <span className="font-bold text-sky-400">Kami</span>
          </h1>
          <section className="contact">
            <form onSubmit={onSubmit}>
              <div className="input-box">
                <label>Nama Lengkap</label>
                <input
                  type="text"
                  className="field"
                  placeholder="Masukkan Nama Anda"
                  name="name"
                  required
                />
              </div>
              <div className="input-box">
                <label>Email</label>
                <input
                  type="email"
                  className="field"
                  placeholder="Masukkan Email Anda"
                  name="email"
                  required
                />
              </div>
              <div className="input-box">
                <label>Pesan Anda</label>
                <textarea
                  name="message"
                  className="field mess"
                  placeholder="Masukkan Pesan Anda"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex px-5 mx-0 bg-sky-400 py-1 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
              >
                Send Message
              </button>
            </form>
          </section>
          <div className="flex items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.4536783406015!2d108.230363075043!3d-6.836083393161966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f2f1f5256191d%3A0x3a38acd06d09148!2sMajalengka%20Creative%20Center!5e0!3m2!1sen!2sid!4v1731133811544!5m2!1sen!2sid"
              width="1125"
              height="350"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
