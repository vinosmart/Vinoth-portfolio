import { buildPortfolioJson } from '../../data/portfolio';

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'application/json');
  setHeader(event, 'Access-Control-Allow-Origin', '*');
  setHeader(event, 'Cache-Control', 'public, max-age=3600');
  setHeader(event, 'X-Robots-Tag', 'index, follow');

  return buildPortfolioJson();
});
