import { useCallback, useMemo } from 'react';
import { SKey, S_EN, S_TR } from 'resources/strings';
import create from 'zustand';

export enum Locale {
    TR = 'TR',
    EN = 'EN',
}

type LocalizationStoreProps = {
    locale: Locale;
    setLocale: (locale: Locale) => void;
};

const useLocalizationStore = create<LocalizationStoreProps>((set) => ({
    locale: Locale.EN,
    setLocale: (locale: Locale) => set((state) => ({ locale: locale })),
}));

function S_Locale(key: string, locale: Locale): string {
    switch (locale) {
        case Locale.EN:
            return S_EN[key];
        case Locale.TR:
            return S_TR[key];
        default:
            return S_EN[key];
    }
}

export default function useLocalization() {
    const { locale, setLocale } = useLocalizationStore((state) => ({ locale: state.locale, setLocale: state.setLocale }));

    const S = useCallback(
        (key: string) => {
            return S_Locale(key, locale);
        },
        [locale]
    );

    const Key = useMemo(() => SKey, []);

    return { S, Key, setLocale };
}
