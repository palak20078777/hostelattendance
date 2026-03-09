const HOSTEL_PUBLIC_IP = process.env.HOSTEL_PUBLIC_IP;

function getClientIP(req) {
  let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "";

  if (Array.isArray(ip)) ip = ip[0];
  if (ip.includes(",")) ip = ip.split(",")[0].trim();

  if (ip.startsWith("::ffff:")) {
    ip = ip.replace("::ffff:", "");
  }

  return ip.trim();
}

export default function networkLock(req, res, next) {
  const ip = getClientIP(req);

  if (ip === HOSTEL_PUBLIC_IP) {
    return next();
  }

  return res
    .status(403)
    .send("Access Denied - Only Hostel WiFi allowed for Verify");
}