import React, {createContext, useContext, useState, useEffect} from 'react';

type tpages = 'Index' | 'SobreNosotros' | 'Catalogo' | 'Tools' | 'Legales' | 'Otros';

type PreviewContextType = {
    page: tpages;
    setPage: (page: tpages) => void;
    pageDeffault: ()=> void;
}

const PagesContext = createContext<PreviewContextType| undefined>(undefined);

const CtxPagesProvider: React.FC<{children: React.ReactNode}> = ({children})=> {
    const [page, setPage] = useState<tpages>('Index');
    
    const pageDeffault = ()=>{
        setPage('Index');
    }

    useEffect(() => {
      if(page === 'Index')
        document.title = 'Les Fleurs De Marie - Principal';

      if(page !== 'Index')
        document.title = page;
    
    }, [page])
    

    return(
        <PagesContext.Provider value={{page, setPage, pageDeffault}}>
            {children}
        </PagesContext.Provider>
    )
}

const usePages = ()=>{
    const ctx = useContext(PagesContext);
    if(!ctx) throw new Error("usePages debe pertenecer a CtxPagesProvider");

    return ctx
}
export type {
    tpages
}
export {
    CtxPagesProvider, usePages
}
