import React, { ReactNode } from 'react';
import Head from "next/head";
import {AsideHeader, MenuItem, PageLayout, FooterItem, Footer} from '@gravity-ui/navigation';
import { Icon } from '@gravity-ui/uikit';
import {Bug, Gear, Magnifier} from '@gravity-ui/icons';
import {Grid, Row, Col} from '@gravity-ui/page-constructor';
import {HeaderData, Navigation, NavigationItemModel, NavigationItemType, NavigationLinkItem, NavigationLogoData, ThemedNavigationLogoData} from '@gravity-ui/page-constructor';


interface MainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string;
    children: ReactNode 
}
// Портал обработки заявок
const MainLayout: React.FC<MainLayoutProps>
    = ({
           children,
           title,
            description,
            keywords
       }) => {
    let a: Array<MenuItem> = [
        {id: '1', title: '1', tooltipText: '1', icon: Gear},
        {id: '2', title: '2', tooltipText: '2', icon: Magnifier} 
    ]
    return (
        <>
            <Head>
                <title>{`YetiCarb. ${title ? title : ''}`}</title>
                <meta name="description" content={`Обработка заявок` + description}/>
                <meta name="robots" content="index, follow"/>
                <meta name="keywords" content={keywords || "Заявки. Транспорт."}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <main>
                <AsideHeader
                    logo={{text:'1'}}
                    compact={true}
                    hideCollapseButton={true}
                    menuItems={a}
                    renderContent={() => (<>
                        <Footer
                            copyright='Имя пользователя'
                            logo={{
                                text: '',
                                icon: Bug}
                            }
                        ></Footer>
                         {children}</>)}                    
                ></AsideHeader>
            </main>
        </>
    );
};

export default MainLayout;