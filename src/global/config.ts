import { AnalyticsProvider } from "@zen-analytics/constants";

export const AnalyticsProviderConfig = {
    [AnalyticsProvider.GTM]: {
        id: "GTM-NCB945B5",
    },
    [AnalyticsProvider.GA4]: {
        id: "G-5H8N13M1QG",
    },
    [AnalyticsProvider.Microsoft]: {
        id: '343190080'
    },
    [AnalyticsProvider.Appsflyer]: {
        id: '9b0789f1-095c-4c24-9eb7-2d0b43999fe1'
    }
};

export type AnalyticsProviderConfig = typeof AnalyticsProviderConfig;
