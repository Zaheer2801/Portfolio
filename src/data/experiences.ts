export interface Experience {
    slug: string;
    title: string;
    category: string;
    role: string;
    duration: string;
    shortDescription: string;
    color: string;
    image: string;
    achievements: string[];
}

export const experiences: Experience[] = [
    {
        slug: "hp-hood",
        title: "HP Hood LLC",
        category: "Dairy & Beverage",
        role: "SAP EWM Functional Consultant",
        duration: "December 2024 – Feb 2026",
        shortDescription: "End-to-end SAP EWM implementation for cold-storage distribution. Configured frozen/chilled zones, built Putaway/FIFO strategies, and implemented RF framework for perishable goods.",
        color: "from-blue-500/20 to-cyan-500/20",
        image: "/sequence/frame_00_delay-0.066s.png",
        achievements: [
            "Successfully led SAP EWM implementation for HP Hood's cold-storage DC, supporting 50+ warehouse staff with minimal post-go-live issues.",
            "Designed and configured warehouse structures including Storage Types, Sections, Activity Areas, Work Centers, and Staging Areas to accommodate frozen and chilled product zones.",
            "Integrated EWM with SAP PP using PMRs and PSAs to enable real-time material staging from production lines to storage bins.",
            "Managed cutover activities including master data load, bins, HU types, queue monitoring, RF device testing, and post-go-live hypercare."
        ]
    },
    {
        slug: "qualex-consulting",
        title: "Qualex Consulting",
        category: "Pharma & FMCG",
        role: "SAP EWM Functional Consultant",
        duration: "January 2022 – July 2023",
        shortDescription: "S/4HANA EWM rollouts for Dr. Reddy's & ITC Limited. Conducted Fit-Gap workshops, validated cross-functional processes (SIT/UAT), and aligned local requirements with global templates.",
        color: "from-purple-500/20 to-pink-500/20",
        image: "/sequence/frame_45_delay-0.066s.png",
        achievements: [
            "Resolved 200+ SAP support tickets during ITC EWM testing phase with 100% resolution rate.",
            "Supported SAP EWM rollout projects by adapting and implementing standardized warehouse management processes for multiple pharmaceutical sites.",
            "Conducted Fit-Gap analysis to identify site-specific requirements and localized SAP EWM configurations accordingly.",
            "Coordinated data migration, master data preparation, and integration between SAP EWM and MM, SD, and QM modules, ensuring seamless interfacing with third-party systems."
        ]
    },
    {
        slug: "halcon-technologies",
        title: "Halcon Technologies",
        category: "Discrete Manufacturing",
        role: "SAP MM/EWM Functional Consultant",
        duration: "November 2018 – December 2021",
        shortDescription: "Delivered continuous SAP MM/EWM support for Bharat Forge and Amara Raja. Resolved RF anomalies, optimized batch management, and empowered remote warehouse operations during COVID-19.",
        color: "from-emerald-500/20 to-teal-500/20",
        image: "/sequence/frame_65_delay-0.066s.png",
        achievements: [
            "Reduced inventory discrepancies by 95% through accurate MIGO processing and cycle count management at Bharat Forge.",
            "Maintained uninterrupted warehouse operations during COVID-19 remote support at Amara Raja Group.",
            "Delivered L2/L3 SAP MM support across multiple manufacturing plants, focusing on PR/PO issues, GR/IR discrepancies, and inventory posting corrections.",
            "Resolved RF-related issues e.g., picking failures, bin denials, assisted in HU corrections, and monitored Warehouse Tasks (WTs)."
        ]
    },
    {
        slug: "spectrum-consulting",
        title: "Spectrum Consulting Pvt Ltd",
        category: "Data Analytics",
        role: "Data Analyst",
        duration: "September 2017 – September 2018",
        shortDescription: "Processed and cleaned large datasets for NVIDIA Graphics analytics and reporting pipelines.",
        color: "from-amber-500/20 to-orange-500/20",
        image: "/sequence/frame_80_delay-0.066s.png",
        achievements: [
            "Supported Data Factory team in processing and cleaning large datasets for analytics and reporting.",
            "Performed data quality checks, validation, and transformation for structured reporting and analysis.",
            "Built Excel dashboards and assisted in Power BI report generation for business KPIs.",
            "Wrote SQL queries for data extraction, transformation, and ad-hoc analysis.",
            "Collaborated with cross-functional teams to improve data accuracy, reporting workflows, and system efficiency."
        ]
    }
];
