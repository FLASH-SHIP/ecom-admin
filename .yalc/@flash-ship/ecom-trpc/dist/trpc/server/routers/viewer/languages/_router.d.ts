export declare const languagesRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: import("../../..").Context;
    meta: object;
    errorShape: {
        message: string;
        data: {
            zodError: {
                message: string;
                details: import("../../../init").ZodErrorDetail[];
            } | null;
            code: import("@trpc/server").TRPC_ERROR_CODE_KEY;
            httpStatus: number;
            path?: string;
            stack?: string;
        };
        code: import("@trpc/server").TRPC_ERROR_CODE_NUMBER;
    };
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    list: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            name: string;
            id: number;
            code: string;
            createdAt: Date;
            updatedAt: Date;
            order: number;
            isActive: boolean;
            locale: string;
            isDefault: boolean;
            flag: string | null;
            isRtl: boolean;
        }[];
        meta: object;
    }>;
    getActive: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: import("@ecom/features/language/services/LanguageLocaleCache").CachedLanguage[];
        meta: object;
    }>;
    getById: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            id: number;
        };
        output: {
            name: string;
            id: number;
            code: string;
            createdAt: Date;
            updatedAt: Date;
            order: number;
            isActive: boolean;
            locale: string;
            isDefault: boolean;
            flag: string | null;
            isRtl: boolean;
        };
        meta: object;
    }>;
    getDefault: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: import("@ecom/features/language/services/LanguageLocaleCache").CachedLanguage;
        meta: object;
    }>;
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name: string;
            locale: string;
            code: string;
            flag?: string | undefined;
            isRtl?: boolean | undefined;
            order?: number | undefined;
        };
        output: {
            name: string;
            id: number;
            code: string;
            createdAt: Date;
            updatedAt: Date;
            order: number;
            isActive: boolean;
            locale: string;
            isDefault: boolean;
            flag: string | null;
            isRtl: boolean;
        };
        meta: object;
    }>;
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
            name?: string | undefined;
            locale?: string | undefined;
            code?: string | undefined;
            flag?: string | undefined;
            isRtl?: boolean | undefined;
            order?: number | undefined;
            isActive?: boolean | undefined;
        };
        output: {
            name: string;
            id: number;
            code: string;
            createdAt: Date;
            updatedAt: Date;
            order: number;
            isActive: boolean;
            locale: string;
            isDefault: boolean;
            flag: string | null;
            isRtl: boolean;
        };
        meta: object;
    }>;
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            id: number;
        };
        meta: object;
    }>;
    setDefault: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            name: string;
            id: number;
            code: string;
            createdAt: Date;
            updatedAt: Date;
            order: number;
            isActive: boolean;
            locale: string;
            isDefault: boolean;
            flag: string | null;
            isRtl: boolean;
        };
        meta: object;
    }>;
    getRelatedItems: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            referenceId: number;
            referenceType: string;
        };
        output: {
            id: number;
            language: {
                name: string;
                id: number;
                code: string;
                locale: string;
                flag: string | null;
            };
            referenceId: number;
            referenceType: string;
            langCode: string;
            origin: string;
        }[];
        meta: object;
    }>;
    saveContentLanguage: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            referenceId: number;
            referenceType: string;
            langCode: string;
            refFrom?: number | undefined;
        };
        output: {
            id: number;
            referenceId: number;
            referenceType: string;
            langCode: string;
            origin: string;
        };
        meta: object;
    }>;
    worldLanguages: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: readonly [{
            readonly name: "Afrikaans";
            readonly locale: "af";
            readonly code: "af";
            readonly flag: "za";
        }, {
            readonly name: "አማርኛ";
            readonly locale: "am";
            readonly code: "am";
            readonly flag: "et";
        }, {
            readonly name: "العربية";
            readonly locale: "ar";
            readonly code: "ar";
            readonly flag: "sa";
            readonly isRtl: true;
        }, {
            readonly name: "العربية المغربية";
            readonly locale: "ary";
            readonly code: "ary";
            readonly flag: "ma";
            readonly isRtl: true;
        }, {
            readonly name: "Azərbaycan";
            readonly locale: "az";
            readonly code: "az";
            readonly flag: "az";
        }, {
            readonly name: "گؤنئی آذربایجان";
            readonly locale: "azb";
            readonly code: "azb";
            readonly flag: "az";
            readonly isRtl: true;
        }, {
            readonly name: "Беларуская мова";
            readonly locale: "bel";
            readonly code: "bel";
            readonly flag: "by";
        }, {
            readonly name: "български";
            readonly locale: "bg_BG";
            readonly code: "bg_BG";
            readonly flag: "bg";
        }, {
            readonly name: "বাংলা";
            readonly locale: "bn_BD";
            readonly code: "bn_BD";
            readonly flag: "bd";
        }, {
            readonly name: "བོད་སྐད";
            readonly locale: "bo";
            readonly code: "bo";
            readonly flag: "cn";
        }, {
            readonly name: "Bosanski";
            readonly locale: "bs_BA";
            readonly code: "bs_BA";
            readonly flag: "ba";
        }, {
            readonly name: "Catalan";
            readonly locale: "ca";
            readonly code: "ca_ES";
            readonly flag: "es";
        }, {
            readonly name: "Cebuano";
            readonly locale: "ceb";
            readonly code: "ceb";
            readonly flag: "ph";
        }, {
            readonly name: "Čeština";
            readonly locale: "cs_CZ";
            readonly code: "cs_CZ";
            readonly flag: "cz";
        }, {
            readonly name: "Cymraeg";
            readonly locale: "cy";
            readonly code: "cy";
            readonly flag: "gb";
        }, {
            readonly name: "Dansk";
            readonly locale: "da_DK";
            readonly code: "da_DK";
            readonly flag: "dk";
        }, {
            readonly name: "Deutsch (Schweiz)";
            readonly locale: "de_CH";
            readonly code: "de_CH";
            readonly flag: "ch";
        }, {
            readonly name: "Deutsch (Schweiz, Informell)";
            readonly locale: "de_CH_informal";
            readonly code: "de_CH_informal";
            readonly flag: "ch";
        }, {
            readonly name: "Deutsch";
            readonly locale: "de_DE";
            readonly code: "de_DE";
            readonly flag: "de";
        }, {
            readonly name: "Deutsch (Formal)";
            readonly locale: "de_DE_formal";
            readonly code: "de_DE_formal";
            readonly flag: "de";
        }, {
            readonly name: "Ελληνικά";
            readonly locale: "el";
            readonly code: "el";
            readonly flag: "gr";
        }, {
            readonly name: "English";
            readonly locale: "en";
            readonly code: "en";
            readonly flag: "us";
        }, {
            readonly name: "English (US)";
            readonly locale: "en_US";
            readonly code: "en_US";
            readonly flag: "us";
        }, {
            readonly name: "English (Australia)";
            readonly locale: "en_AU";
            readonly code: "en_AU";
            readonly flag: "au";
        }, {
            readonly name: "English (Canada)";
            readonly locale: "en_CA";
            readonly code: "en_CA";
            readonly flag: "ca";
        }, {
            readonly name: "English (UK)";
            readonly locale: "en_GB";
            readonly code: "en_GB";
            readonly flag: "gb";
        }, {
            readonly name: "English (New Zealand)";
            readonly locale: "en_NZ";
            readonly code: "en_NZ";
            readonly flag: "nz";
        }, {
            readonly name: "English (South Africa)";
            readonly locale: "en_ZA";
            readonly code: "en_ZA";
            readonly flag: "za";
        }, {
            readonly name: "Español (Argentina)";
            readonly locale: "es_AR";
            readonly code: "es_AR";
            readonly flag: "ar";
        }, {
            readonly name: "Español (Chile)";
            readonly locale: "es_CL";
            readonly code: "es_CL";
            readonly flag: "cl";
        }, {
            readonly name: "Español (Colombia)";
            readonly locale: "es_CO";
            readonly code: "es_CO";
            readonly flag: "co";
        }, {
            readonly name: "Español";
            readonly locale: "es_ES";
            readonly code: "es_ES";
            readonly flag: "es";
        }, {
            readonly name: "Español (Guatemala)";
            readonly locale: "es_GT";
            readonly code: "es_GT";
            readonly flag: "gt";
        }, {
            readonly name: "Español (México)";
            readonly locale: "es_MX";
            readonly code: "es_MX";
            readonly flag: "mx";
        }, {
            readonly name: "Español (Perú)";
            readonly locale: "es_PE";
            readonly code: "es_PE";
            readonly flag: "pe";
        }, {
            readonly name: "Español (Venezuela)";
            readonly locale: "es_VE";
            readonly code: "es_VE";
            readonly flag: "ve";
        }, {
            readonly name: "Eesti";
            readonly locale: "et";
            readonly code: "et";
            readonly flag: "ee";
        }, {
            readonly name: "Euskara";
            readonly locale: "eu";
            readonly code: "eu";
            readonly flag: "es";
        }, {
            readonly name: "فارسی (افغانستان)";
            readonly locale: "fa_AF";
            readonly code: "fa_AF";
            readonly flag: "af";
            readonly isRtl: true;
        }, {
            readonly name: "فارسی";
            readonly locale: "fa_IR";
            readonly code: "fa_IR";
            readonly flag: "ir";
            readonly isRtl: true;
        }, {
            readonly name: "Suomi";
            readonly locale: "fi";
            readonly code: "fi";
            readonly flag: "fi";
        }, {
            readonly name: "Føroyskt";
            readonly locale: "fo";
            readonly code: "fo";
            readonly flag: "fo";
        }, {
            readonly name: "Français";
            readonly locale: "fr";
            readonly code: "fr";
            readonly flag: "fr";
        }, {
            readonly name: "Français (Belgique)";
            readonly locale: "fr_BE";
            readonly code: "fr_BE";
            readonly flag: "be";
        }, {
            readonly name: "Français (France)";
            readonly locale: "fr_FR";
            readonly code: "fr_FR";
            readonly flag: "fr";
        }, {
            readonly name: "Frysk";
            readonly locale: "fy";
            readonly code: "fy";
            readonly flag: "nl";
        }, {
            readonly name: "Gàidhlig";
            readonly locale: "gd";
            readonly code: "gd";
            readonly flag: "gb";
        }, {
            readonly name: "Galego";
            readonly locale: "gl_ES";
            readonly code: "gl_ES";
            readonly flag: "es";
        }, {
            readonly name: "ગુજરાતી";
            readonly locale: "gu";
            readonly code: "gu";
            readonly flag: "in";
        }, {
            readonly name: "هزاره گی";
            readonly locale: "haz";
            readonly code: "haz";
            readonly flag: "af";
            readonly isRtl: true;
        }, {
            readonly name: "עברית";
            readonly locale: "he_IL";
            readonly code: "he_IL";
            readonly flag: "il";
            readonly isRtl: true;
        }, {
            readonly name: "हिन्दी";
            readonly locale: "hi_IN";
            readonly code: "hi_IN";
            readonly flag: "in";
        }, {
            readonly name: "Hrvatski";
            readonly locale: "hr";
            readonly code: "hr";
            readonly flag: "hr";
        }, {
            readonly name: "Kreyòl Ayisyen";
            readonly locale: "ht";
            readonly code: "ht";
            readonly flag: "ht";
        }, {
            readonly name: "Magyar";
            readonly locale: "hu_HU";
            readonly code: "hu_HU";
            readonly flag: "hu";
        }, {
            readonly name: "Հայերեն";
            readonly locale: "hy";
            readonly code: "hy";
            readonly flag: "am";
        }, {
            readonly name: "Bahasa Indonesia";
            readonly locale: "id";
            readonly code: "id";
            readonly flag: "id";
        }, {
            readonly name: "Bahasa Indonesia";
            readonly locale: "id_ID";
            readonly code: "id_ID";
            readonly flag: "id";
        }, {
            readonly name: "Íslenska";
            readonly locale: "is_IS";
            readonly code: "is_IS";
            readonly flag: "is";
        }, {
            readonly name: "Italiano";
            readonly locale: "it_IT";
            readonly code: "it_IT";
            readonly flag: "it";
        }, {
            readonly name: "日本語";
            readonly locale: "ja";
            readonly code: "ja";
            readonly flag: "jp";
        }, {
            readonly name: "Basa Jawa";
            readonly locale: "jv_ID";
            readonly code: "jv_ID";
            readonly flag: "id";
        }, {
            readonly name: "ქართული";
            readonly locale: "ka_GE";
            readonly code: "ka_GE";
            readonly flag: "ge";
        }, {
            readonly name: "Қазақ тілі";
            readonly locale: "kk";
            readonly code: "kk";
            readonly flag: "kz";
        }, {
            readonly name: "Cambodia";
            readonly locale: "kh";
            readonly code: "kh";
            readonly flag: "kh";
        }, {
            readonly name: "한국어";
            readonly locale: "ko_KR";
            readonly code: "ko_KR";
            readonly flag: "kr";
        }, {
            readonly name: "Кыргызча";
            readonly locale: "ky_KG";
            readonly code: "ky_KG";
            readonly flag: "kg";
        }, {
            readonly name: "کوردی";
            readonly locale: "ckb";
            readonly code: "ckb";
            readonly flag: "iq";
            readonly isRtl: true;
        }, {
            readonly name: "ພາສາລາວ";
            readonly locale: "lo";
            readonly code: "lo";
            readonly flag: "la";
        }, {
            readonly name: "Lietuviškai";
            readonly locale: "lt_LT";
            readonly code: "lt_LT";
            readonly flag: "lt";
        }, {
            readonly name: "Latviešu valoda";
            readonly locale: "lv";
            readonly code: "lv";
            readonly flag: "lv";
        }, {
            readonly name: "македонски јазик";
            readonly locale: "mk_MK";
            readonly code: "mk_MK";
            readonly flag: "mk";
        }, {
            readonly name: "Монгол хэл";
            readonly locale: "mn";
            readonly code: "mn";
            readonly flag: "mn";
        }, {
            readonly name: "मराठी";
            readonly locale: "mr";
            readonly code: "mr";
            readonly flag: "in";
        }, {
            readonly name: "Bahasa Melayu";
            readonly locale: "ms_MY";
            readonly code: "ms_MY";
            readonly flag: "my";
        }, {
            readonly name: "ဗမာစာ";
            readonly locale: "my_MM";
            readonly code: "my_MM";
            readonly flag: "mm";
        }, {
            readonly name: "Maldives";
            readonly locale: "mv";
            readonly code: "mv";
            readonly flag: "mv";
            readonly isRtl: true;
        }, {
            readonly name: "Norsk Bokmål";
            readonly locale: "nb_NO";
            readonly code: "nb_NO";
            readonly flag: "no";
        }, {
            readonly name: "नेपाली";
            readonly locale: "ne_NP";
            readonly code: "ne_NP";
            readonly flag: "np";
        }, {
            readonly name: "Nederlands";
            readonly locale: "nl_NL";
            readonly code: "nl_NL";
            readonly flag: "nl";
        }, {
            readonly name: "Nederlands (Formal)";
            readonly locale: "nl_NL_formal";
            readonly code: "nl_NL_formal";
            readonly flag: "nl";
        }, {
            readonly name: "Norsk Nynorsk";
            readonly locale: "nn_NO";
            readonly code: "nn_NO";
            readonly flag: "no";
        }, {
            readonly name: "Polski";
            readonly locale: "pl_PL";
            readonly code: "pl_PL";
            readonly flag: "pl";
        }, {
            readonly name: "پښتو";
            readonly locale: "ps";
            readonly code: "ps";
            readonly flag: "af";
            readonly isRtl: true;
        }, {
            readonly name: "Português (Brasil)";
            readonly locale: "pt_BR";
            readonly code: "pt_BR";
            readonly flag: "br";
        }, {
            readonly name: "Português";
            readonly locale: "pt_PT";
            readonly code: "pt_PT";
            readonly flag: "pt";
        }, {
            readonly name: "Română";
            readonly locale: "ro_RO";
            readonly code: "ro_RO";
            readonly flag: "ro";
        }, {
            readonly name: "Русский";
            readonly locale: "ru_RU";
            readonly code: "ru_RU";
            readonly flag: "ru";
        }, {
            readonly name: "සිංහල";
            readonly locale: "si_LK";
            readonly code: "si_LK";
            readonly flag: "lk";
        }, {
            readonly name: "Slovenčina";
            readonly locale: "sk_SK";
            readonly code: "sk_SK";
            readonly flag: "sk";
        }, {
            readonly name: "Slovenščina";
            readonly locale: "sl_SI";
            readonly code: "sl_SI";
            readonly flag: "si";
        }, {
            readonly name: "Af-Soomaali";
            readonly locale: "so_SO";
            readonly code: "so_SO";
            readonly flag: "so";
        }, {
            readonly name: "Shqip";
            readonly locale: "sq";
            readonly code: "sq";
            readonly flag: "al";
        }, {
            readonly name: "Shqip (Shqipëri)";
            readonly locale: "sq_AL";
            readonly code: "sq_AL";
            readonly flag: "al";
        }, {
            readonly name: "Српски језик";
            readonly locale: "sr_RS";
            readonly code: "sr_RS";
            readonly flag: "rs";
        }, {
            readonly name: "Basa Sunda";
            readonly locale: "su_ID";
            readonly code: "su_ID";
            readonly flag: "id";
        }, {
            readonly name: "Svenska";
            readonly locale: "sv_SE";
            readonly code: "sv_SE";
            readonly flag: "se";
        }, {
            readonly name: "Ślōnskŏ gŏdka";
            readonly locale: "szl";
            readonly code: "szl";
            readonly flag: "pl";
        }, {
            readonly name: "Swahili";
            readonly locale: "sw";
            readonly code: "sw";
            readonly flag: "ke";
        }, {
            readonly name: "தமிழ்";
            readonly locale: "ta_LK";
            readonly code: "ta_LK";
            readonly flag: "lk";
        }, {
            readonly name: "ไทย";
            readonly locale: "th";
            readonly code: "th";
            readonly flag: "th";
        }, {
            readonly name: "ትግርኛ";
            readonly locale: "ti";
            readonly code: "ti";
            readonly flag: "er";
        }, {
            readonly name: "Tagalog";
            readonly locale: "tl";
            readonly code: "tl";
            readonly flag: "ph";
        }, {
            readonly name: "Türkçe";
            readonly locale: "tr";
            readonly code: "tr";
            readonly flag: "tr";
        }, {
            readonly name: "Türkçe (Türkiye)";
            readonly locale: "tr_TR";
            readonly code: "tr_TR";
            readonly flag: "tr";
        }, {
            readonly name: "Uyƣurqə";
            readonly locale: "ug_CN";
            readonly code: "ug_CN";
            readonly flag: "cn";
        }, {
            readonly name: "Українська";
            readonly locale: "uk";
            readonly code: "uk";
            readonly flag: "ua";
        }, {
            readonly name: "اردو";
            readonly locale: "ur";
            readonly code: "ur";
            readonly flag: "pk";
            readonly isRtl: true;
        }, {
            readonly name: "Oʻzbek";
            readonly locale: "uz_UZ";
            readonly code: "uz_UZ";
            readonly flag: "uz";
        }, {
            readonly name: "Tiếng Việt";
            readonly locale: "vi";
            readonly code: "vi";
            readonly flag: "vn";
        }, {
            readonly name: "中文 (中国)";
            readonly locale: "zh_CN";
            readonly code: "zh_CN";
            readonly flag: "cn";
        }, {
            readonly name: "中文 (香港)";
            readonly locale: "zh_HK";
            readonly code: "zh_HK";
            readonly flag: "hk";
        }, {
            readonly name: "中文 (台灣)";
            readonly locale: "zh_TW";
            readonly code: "zh_TW";
            readonly flag: "tw";
        }, {
            readonly name: "Tajik";
            readonly locale: "tg";
            readonly code: "tg";
            readonly flag: "tj";
        }];
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map