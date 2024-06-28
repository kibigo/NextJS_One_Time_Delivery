import { url } from "inspector";
import fs from 'fs';
import path from "path";

// const fs = require('fs');

//const path = require('path');
const __dirname = path.dirname(new URL(import.meta.url).pathname);



const baseUrl = 'http://localhost:3001';


const getCurrentDate = () => new Date().toISOString();

const sections = [
    {id: 'about', title:'About'},
    {id: 'why', title: 'Why Us'}
];



const generateSiteMap = () => {
    
    let siteMapContent = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    `;
    
        // Add each section to the sitemap
        sections.forEach(section => {
            const url = `${baseUrl}/${section.id}`;
            siteMapContent += `
        <url>
            <loc>${url}</loc>
            <lastmod>${getCurrentDate()}</lastmod>
        </url>`;
        });
    
        siteMapContent += `
    </urlset>`;

    const filePath = path.resolve(__dirname, 'public', 'sitemap.xml');

    fs.writeFileSync(filePath, siteMapContent, 'utf-8');
};

generateSiteMap();