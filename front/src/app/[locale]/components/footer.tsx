import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="py-8 font-poppins bg-fondo ring-2 ring-verde ring-opacity-100">
      <div className="grid grid-cols-1 gap-8 px-6 mx-auto transition max-w-7xl md:grid-cols-3">
        <div className=" hover:text-verde">
          <h3 className="mb-3 text-lg font-semibold text-black "> {t("h1")}</h3>
          <p className="text-justify text-gray-400 hover:text-verde">
            {t("p1")}
          </p>
        </div>

        <div className="transition hover:text-verde">
          <h3 className="pt-2 mb-3 text-lg font-semibold"> {t("h2")} </h3>

          <Link href="mailto:andreasantacruz123@gmail.com">
            <p className="text-justify text-gray-400 ">
              Email: andreasantacruz123@gmail.com
            </p>
          </Link>
          <Link href="/dataTreatment">
            <p className="pt-2 text-justify text-gray-400 ">{t("p2")} </p>
          </Link>
        </div>

        <div className=" hover:text-verde">
          <h3 className="mb-3 text-lg font-semibold text-center hover:text-verde">
            {t("h3")}{" "}
          </h3>
          <div className="flex justify-center space-x-8">
            <a
              target="_blank"
              href="https://www.facebook.com/share/1ARa9BfqC3/?mibextid=wwXIfr"
            >
              <FaSquareFacebook />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/paulaandreasantacruz?igsh=MW1tbWswMXkzYjJmNQ%3D%3D&utm_source=qr"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/paulaandreasantacruz"
            >
              <FaLinkedin />
            </a>
            <a target="_blank" href="https://github.com/pandreasantacruz">
              <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://www.tiktok.com/@paulaandreasantacruz"
            >
              <AiFillTikTok />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-sm text-center text-gray-500">
        © {new Date().getFullYear()}. Paula Andrea Santacruz - Desarrolladora.
        Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
