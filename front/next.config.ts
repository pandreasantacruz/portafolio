import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({  localePath: "./messages"
});
const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);
