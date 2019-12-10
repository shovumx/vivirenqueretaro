import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

export default () => (
	<StaticQuery
		query={graphql`
			query helmetQuery {
				site {
					siteMetadata {
						title
						author
						description
						
					}
				}
			}
		`}
		render={data => (
			<Helmet>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
				/>
				<meta name="description" content={data.site.siteMetadata.description} />
				
				<title>{data.site.siteMetadata.title}</title>
				<html lang="es-MX" />
				{/* Google / Search Engine Meta Tags */}
				<meta itemprop="name" content={data.site.siteMetadata.author} /> />
				<meta
					itemprop="description"
					content={data.site.siteMetadata.description}
				/>
				
				<meta name="robots" content="index,follow"></meta>
				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
            <meta property="og:url" content="https://vivirenqueretaro.mx/" />
            <meta property="og:title" content="Agencia inmobiliaria en Querétaro" />
            <meta property="og:description" content="Somos una agencia de bienes raices en Querétaro basada en Inteligencia Artificial y Big Data." />
            <meta property="og:image" content="https://vivirenqueretaro.mx/static/d7d024fdfbbc569464df4cddd1696355/56296/vivir_en_queretaro.png" />
            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://vivirenqueretaro.mx/" />
            <meta property="twitter:title" content="Agencia inmobiliaria en Querétaro" />
            <meta property="twitter:description" content="Somos una agencia de bienes raices en Querétaro basada en Inteligencia Artificial y Big Data." />
            <meta property="twitter:image" content="https://vivirenqueretaro.mx/static/d7d024fdfbbc569464df4cddd1696355/56296/vivir_en_queretaro.png" />

			</Helmet>
		)}
	/>
);
