import React from 'react';
import {
  SiPython,
  SiMysql,
  SiJavascript,
  SiTableau,
  SiLooker,
  SiApacheairflow,
  SiSnowflake,
  SiApachespark,
  SiPostgresql,
  SiAmazonredshift,
  SiGooglecloud,
  SiMongodb,
  SiAmazon,
  SiDocker,
  SiGithubactions,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiDbt,
  SiKubernetes,
  SiTerraform,
  SiGit,
  SiApachekafka,
  SiElasticsearch,
  SiRedis,
  SiGraphql,
  SiNextdotjs,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiJupyter,
  SiApache,
  SiNginx,
  SiLinux,
  SiUbuntu,
  SiMacos,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiJira,
  SiConfluence,
  SiSlack,
  SiNotion,
  SiFigma,
  SiPostman,
  SiSqlite,
  SiOracle,
  SiFirebase,
  SiSupabase,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiDigitalocean,
  SiGoogleanalytics,
  SiDatadog,
  SiPrometheus,
  SiGrafana,
} from 'react-icons/si';

import {
  DiDatabase,
  DiJava,
} from 'react-icons/di';

import {
  FaChartBar,
  FaCode,
  FaServer,
  FaCloud,
  FaCogs,
  FaExchangeAlt,
  FaWindows,
  FaMicrosoft,
  FaAws
} from 'react-icons/fa';

import { VscCode } from 'react-icons/vsc';

export const getSkillIcon = (iconName: string): React.ReactElement => {
  const iconStyle = { width: '32px', height: '32px' };

  const icons: { [key: string]: React.ReactElement } = {
    // Programming Languages
    python: <SiPython style={iconStyle} />,
    java: <DiJava style={iconStyle} />,
    javascript: <SiJavascript style={iconStyle} />,
    typescript: <SiTypescript style={iconStyle} />,

    // SQL & Databases
    sql: <SiMysql style={iconStyle} />,
    mysql: <SiMysql style={iconStyle} />,
    postgresql: <SiPostgresql style={iconStyle} />,
    postgres: <SiPostgresql style={iconStyle} />,
    mongodb: <SiMongodb style={iconStyle} />,
    sqlite: <SiSqlite style={iconStyle} />,
    oracle: <SiOracle style={iconStyle} />,
    sqlserver: <FaMicrosoft style={iconStyle} />,
    mssql: <FaMicrosoft style={iconStyle} />,
    database: <DiDatabase style={iconStyle} />,

    // Data Warehouses
    redshift: <SiAmazonredshift style={iconStyle} />,
    bigquery: <SiGooglecloud style={iconStyle} />,
    snowflake: <SiSnowflake style={iconStyle} />,

    // Visualization Tools
    tableau: <SiTableau style={iconStyle} />,
    powerbi: <FaMicrosoft style={iconStyle} />,
    looker: <SiLooker style={iconStyle} />,
    visualization: <FaChartBar style={iconStyle} />,

    // Data Engineering & ETL
    airflow: <SiApacheairflow style={iconStyle} />,
    spark: <SiApachespark style={iconStyle} />,
    kafka: <SiApachekafka style={iconStyle} />,
    dbt: <SiDbt style={iconStyle} />,
    etl: <FaExchangeAlt style={iconStyle} />,

    // Cloud Platforms
    aws: <FaAws style={iconStyle} />,
    gcp: <SiGooglecloud style={iconStyle} />,
    azure: <FaMicrosoft style={iconStyle} />,
    firebase: <SiFirebase style={iconStyle} />,
    supabase: <SiSupabase style={iconStyle} />,

    // DevOps & CI/CD
    docker: <SiDocker style={iconStyle} />,
    kubernetes: <SiKubernetes style={iconStyle} />,
    k8s: <SiKubernetes style={iconStyle} />,
    terraform: <SiTerraform style={iconStyle} />,
    githubactions: <SiGithubactions style={iconStyle} />,
    cicd: <FaCogs style={iconStyle} />,
    git: <SiGit style={iconStyle} />,

    // Frontend Frameworks
    react: <SiReact style={iconStyle} />,
    nextjs: <SiNextdotjs style={iconStyle} />,
    next: <SiNextdotjs style={iconStyle} />,

    // Backend Frameworks
    nodejs: <SiNodedotjs style={iconStyle} />,
    node: <SiNodedotjs style={iconStyle} />,
    django: <SiDjango style={iconStyle} />,
    flask: <SiFlask style={iconStyle} />,
    fastapi: <SiFastapi style={iconStyle} />,

    // Data Science & ML
    pandas: <SiPandas style={iconStyle} />,
    numpy: <SiNumpy style={iconStyle} />,
    scikitlearn: <SiScikitlearn style={iconStyle} />,
    sklearn: <SiScikitlearn style={iconStyle} />,
    tensorflow: <SiTensorflow style={iconStyle} />,
    pytorch: <SiPytorch style={iconStyle} />,
    jupyter: <SiJupyter style={iconStyle} />,

    // Tools & Services
    elasticsearch: <SiElasticsearch style={iconStyle} />,
    redis: <SiRedis style={iconStyle} />,
    graphql: <SiGraphql style={iconStyle} />,
    nginx: <SiNginx style={iconStyle} />,
    apache: <SiApache style={iconStyle} />,

    // Deployment Platforms
    vercel: <SiVercel style={iconStyle} />,
    netlify: <SiNetlify style={iconStyle} />,
    heroku: <SiHeroku style={iconStyle} />,
    digitalocean: <SiDigitalocean style={iconStyle} />,

    // Collaboration & Project Management
    github: <SiGithub style={iconStyle} />,
    gitlab: <SiGitlab style={iconStyle} />,
    bitbucket: <SiBitbucket style={iconStyle} />,
    jira: <SiJira style={iconStyle} />,
    confluence: <SiConfluence style={iconStyle} />,
    slack: <SiSlack style={iconStyle} />,
    notion: <SiNotion style={iconStyle} />,

    // Design & Development Tools
    figma: <SiFigma style={iconStyle} />,
    postman: <SiPostman style={iconStyle} />,
    vscode: <VscCode style={iconStyle} />,
    visualstudio: <VscCode style={iconStyle} />,

    // Monitoring & Analytics
    datadog: <SiDatadog style={iconStyle} />,
    prometheus: <SiPrometheus style={iconStyle} />,
    grafana: <SiGrafana style={iconStyle} />,
    analytics: <SiGoogleanalytics style={iconStyle} />,

    // Operating Systems
    linux: <SiLinux style={iconStyle} />,
    ubuntu: <SiUbuntu style={iconStyle} />,
    windows: <FaWindows style={iconStyle} />,
    macos: <SiMacos style={iconStyle} />,

    // Generic fallbacks
    code: <FaCode style={iconStyle} />,
    server: <FaServer style={iconStyle} />,
    cloud: <FaCloud style={iconStyle} />,
  };

  return icons[iconName.toLowerCase()] || icons['code'];
};
