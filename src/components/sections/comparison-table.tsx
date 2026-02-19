'use client';

import React from 'react';
import {
    Box,
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    useTheme,
    alpha,
    Tooltip,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FlareIcon from '@mui/icons-material/Flare';

interface MetricRow {
    feature: string;
    category: string;
    zen: string | boolean;
    omnibug: string | boolean;
    taghound: string | boolean;
    analyticsDebugger: string | boolean;
    metaHelper: string | boolean;
    highlight?: boolean;
}

const comparisonData: MetricRow[] = [
    {
        category: 'Core Detection',
        feature: 'Supported Vendors',
        zen: '25+ (Unified)',
        omnibug: '69+ (Raw)',
        taghound: '20+',
        analyticsDebugger: '10 (Google Focus)',
        metaHelper: '1 (Meta Only)',
        highlight: true,
    },
    {
        category: 'Core Detection',
        feature: 'Unified Interface (One Extension)',
        zen: true,
        omnibug: true,
        taghound: true,
        analyticsDebugger: true,
        metaHelper: false,
    },
    {
        category: 'Decoding',
        feature: 'Full JSON/POST Parse',
        zen: true,
        omnibug: false,
        taghound: true,
        analyticsDebugger: true,
        metaHelper: 'Basic',
    },
    {
        category: 'Geo-Location',
        feature: 'IP Anonymization Check (GDPR)',
        zen: true,
        omnibug: false,
        taghound: 'Alert Only',
        analyticsDebugger: false,
        metaHelper: false,
        highlight: true,
    },
    {
        category: 'Geo-Location',
        feature: 'Explicit Geo-Parameter Visibility',
        zen: true,
        omnibug: 'Raw',
        taghound: 'Grouped',
        analyticsDebugger: 'Detailed',
        metaHelper: false,
    },
    {
        category: 'Data Integrity',
        feature: 'Cross-Platform Correlation',
        zen: true,
        omnibug: false,
        taghound: false,
        analyticsDebugger: false,
        metaHelper: false,
        highlight: true,
    },
    {
        category: 'Data Integrity',
        feature: 'Server-Side (CAPI) View',
        zen: 'Limited (Beta)',
        omnibug: false,
        taghound: false,
        analyticsDebugger: 'GTM Server',
        metaHelper: 'Deduplication',
    },
    {
        category: 'Usability',
        feature: 'Multi-Mode View (Popup, SidePanel, Panel)',
        zen: true,
        omnibug: false,
        taghound: false,
        analyticsDebugger: false,
        metaHelper: false,
    },
    {
        category: 'Usability',
        feature: 'Browser Theme Support (50+)',
        zen: true,
        omnibug: false,
        taghound: false,
        analyticsDebugger: false,
        metaHelper: false,
    },
    {
        category: 'Performance',
        feature: 'Low Browser Overhead',
        zen: 'Ultra-Low (Single Script)',
        omnibug: 'Low',
        taghound: 'Medium',
        analyticsDebugger: 'High (Heavy UI)',
        metaHelper: 'Low',
        highlight: true,
    },
];

const RenderValue = ({ value }: { value: string | boolean }) => {
    if (typeof value === 'boolean') {
        return value ? (
            <CheckCircleIcon sx={{ color: 'primary.main' }} />
        ) : (
            <CancelIcon sx={{ color: 'grey.300' }} />
        );
    }
    return (
        <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.primary' }}>
            {value}
        </Typography>
    );
};

export default function ComparisonTable() {
    const theme = useTheme();

    return (
        <Box
            component="section"
            id="comparison-table"
            sx={{
                py: { xs: 8, md: 12 },
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background Decor */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    left: '-5%',
                    width: '30%',
                    height: '40%',
                    background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'primary.main',
                            fontWeight: 700,
                            letterSpacing: 2,
                            mb: 2,
                            display: 'block'
                        }}
                    >
                        MARKET COMPARISON
                    </Typography>
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            fontWeight: 800,
                            mb: 3,
                            fontSize: { xs: '2rem', md: '3rem' },
                            color: 'text.primary'
                        }}
                    >
                        The Most Advanced <br /> Unified Tracker Inspector
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            maxWidth: 700,
                            mx: 'auto',
                            fontSize: '1.1rem',
                            lineHeight: 1.6
                        }}
                    >
                        Why juggle 5 extensions when you can have one unified "Zen" view?
                        Compare Zen Analytics against legacy tools and see the performance gap.
                    </Typography>
                </Box>

                <TableContainer
                    component={Paper}
                    elevation={0}
                    sx={{
                        borderRadius: 4,
                        border: `1px solid ${theme.palette.divider}`,
                        overflow: 'hidden',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
                        maxWidth: '100%',
                        mx: 'auto'
                    }}
                >
                    <Table sx={{ minWidth: 1000 }}>
                        <TableHead>
                            <TableRow sx={{ bgcolor: alpha(theme.palette.grey[100], 0.5) }}>
                                <TableCell sx={{ fontWeight: 700, width: '25%' }}>FEATURE</TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 800,
                                        color: 'primary.main',
                                        bgcolor: alpha(theme.palette.primary.main, 0.05),
                                        position: 'relative',
                                        width: '18%'
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                                        <FlareIcon fontSize="small" />
                                        ZEN ANALYTICS
                                    </Box>
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: 3,
                                            bgcolor: 'primary.main'
                                        }}
                                    />
                                </TableCell>
                                <TableCell align="center" sx={{ fontWeight: 600, color: 'text.secondary' }}>Omnibug</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 600, color: 'text.secondary' }}>TagHound</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 600, color: 'text.secondary' }}>GA Debugger</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 600, color: 'text.secondary' }}>Meta Helper</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {comparisonData.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{
                                        transition: 'background-color 0.2s',
                                        '&:hover': {
                                            bgcolor: alpha(theme.palette.primary.main, 0.01)
                                        }
                                    }}
                                >
                                    <TableCell>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                                            {row.feature}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                                            {row.category}
                                        </Typography>
                                    </TableCell>

                                    {/* Zen Analytics Column Highlighted */}
                                    <TableCell
                                        align="center"
                                        sx={{
                                            bgcolor: alpha(theme.palette.primary.main, 0.02),
                                            borderLeft: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                                            borderRight: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
                                        }}
                                    >
                                        <RenderValue value={row.zen} />
                                    </TableCell>

                                    <TableCell align="center">
                                        <RenderValue value={row.omnibug} />
                                    </TableCell>

                                    <TableCell align="center">
                                        <RenderValue value={row.taghound} />
                                    </TableCell>

                                    <TableCell align="center">
                                        <RenderValue value={row.analyticsDebugger} />
                                    </TableCell>

                                    <TableCell align="center">
                                        <RenderValue value={row.metaHelper} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                        <InfoOutlinedIcon fontSize="small" />
                        Comparison based on 2026 market standards and reported feature sets.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
