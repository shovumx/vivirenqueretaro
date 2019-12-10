import React from "react";
import { FaFacebook } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import "./style.scss";
import "./columns.scss";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            facebook
          }
        }
      }
    `}
    render={data => (
      <footer className="footer center">
        <div className="content has-text-centered">
          <div className="columns is-mobile is-marginless heading has-text-weight-bold">
            <div className="column left">
              <Link to="/" className="navbar-item has-text-white">
                Inicio
              </Link>
            </div>

            <div className="column right">
              <Link to="/contacto" className="navbar-item has-text-white">
                Contacto
              </Link>
            </div>
          </div>
          <p className="is-size-7">
            Agencia Inmobiliaria en Querétaro. Todos los derechos reservados.
            2020.
          </p>
          <p className="is-size-7">
            <a href="https://equilibrio.studio">
              {" "}
              Diseño web hecho por Equilibrio.Studio.
            </a>
          </p>

          <article className="media center">
            <span className="icon">
              <a href={data.site.siteMetadata.facebook}>
                <FaFacebook size="fa-2x" color="blue" />
              </a>
            </span>
          </article>
        </div>
      </footer>
    )}
  />
);

export default Footer;
