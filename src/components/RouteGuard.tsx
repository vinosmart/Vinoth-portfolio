"use client";

import { useEffect, useState } from 'react';
import { usePathname } from '@/i18n/routing';
import { routes, protectedRoutes } from '@/app/resources';
import { Flex, Spinner, Heading } from '@/once-ui/components';

interface RouteGuardProps {
    children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
    const pathname = usePathname();
    const [isRouteEnabled, setIsRouteEnabled] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const performChecks = async () => {
            setLoading(true);
            setIsRouteEnabled(false);

            const checkRouteEnabled = () => {
                if (!pathname) return false;

                if (pathname in routes) {
                    return routes[pathname as keyof typeof routes];
                }

                const dynamicRoutes = ['/blog', '/work'] as const;
                for (const route of dynamicRoutes) {
                    if (pathname?.startsWith(route) && routes[route]) {
                        return true;
                    }
                }

                return false;
            };

            const routeEnabled = checkRouteEnabled();
            setIsRouteEnabled(routeEnabled);

            setLoading(false);
        };

        performChecks();
    }, [pathname]);

    if (loading) {
        return (
            <Flex fillWidth paddingY="128" justifyContent="center">
                <Spinner />
            </Flex>
        );
    }

    if (!isRouteEnabled) {
        return (
            <Flex fillWidth paddingY="128" justifyContent="center">
                <Heading align="center" wrap="balance">
                    This page is not accessible
                </Heading>
            </Flex>
        );
    }

    return <>{children}</>;
};

export { RouteGuard };
