import { StyleSheet } from 'react-native';

// ─── Paletas de tema ──────────────────────────────────────────────────────────
export const darkTheme = {
  bg:         '#000000',
  surface:    '#232323',
  card:       '#1a1a1a',
  cardInner:  '#070707',
  border:     '#898989',
  borderGlow: '#ffffff',
  cyan:       '#00C2FF',
  cyanDim:    '#131c22',
  cyanGlow:   'rgba(18, 18, 18, 0.15)',
  danger:     '#8d071d',
  dangerDim:  '#940101',
  dangerGlow: 'rgba(171, 0, 29, 0.87)',
  success:    '#00E5A0',
  successDim: '#002B1E',
  text:       '#E2EEFF',
  textSub:    '#7A90B8',
  muted:      '#3D5070',
};

export const lightTheme = {
  bg:         '#EEF3FC',
  surface:    '#FFFFFF',
  card:       '#F5F8FF',
  cardInner:  '#FFFFFF',
  border:     '#C8D8F0',
  borderGlow: '#0070CC',
  cyan:       '#0070CC',
  cyanDim:    '#D0E8FF',
  cyanGlow:   'rgba(0,112,204,0.10)',
  danger:     '#91001d',
  dangerDim:  '#92021f',
  dangerGlow: 'rgba(188, 3, 40, 0.83)',
  success:    '#00965A',
  successDim: '#D0F5E8',
  text:       '#0A1428',
  textSub:    '#3A5070',
  muted:      '#9AACC8',
};

// ─── Fábrica de estilos dinâmicos ─────────────────────────────────────────────
export function makeStyles(T) {
  return StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: T.bg,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 22,
      gap: 6,
    },

    app_title: {
      fontWeight: '900',
      fontSize: 22,
      color: T.cyan,
      letterSpacing: 3,
      textTransform: 'uppercase',
      marginBottom: 4,
    },

    titleBar: {
      width: 48,
      height: 2,
      backgroundColor: T.cyan,
      borderRadius: 2,
      marginBottom: 18,
      opacity: 0.7,
    },

    section: {
      width: '100%',
      backgroundColor: T.card,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: T.border,
      padding: 18,
      marginBottom: 10,
      shadowColor: T.cyan,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 12,
      elevation: 4,
    },

    sectionTitle: {
      fontSize: 10,
      fontWeight: '800',
      color: T.textSub,
      letterSpacing: 2,
      textTransform: 'uppercase',
      marginBottom: 14,
      borderLeftWidth: 2,
      borderLeftColor: T.cyan,
      paddingLeft: 8,
    },

    label: {
      fontSize: 10,
      fontWeight: '700',
      color: T.muted,
      letterSpacing: 1.2,
      textTransform: 'uppercase',
      alignSelf: 'flex-start',
      marginBottom: 5,
      marginTop: 2,
    },

    input: {
      width: '100%',
      backgroundColor: T.cardInner,
      borderWidth: 1,
      borderColor: T.border,
      borderRadius: 10,
      paddingHorizontal: 14,
      paddingVertical: 13,
      color: T.text,
      fontSize: 15,
      marginBottom: 12,
    },

    inputFocused: {
      borderColor: T.cyan,
      backgroundColor: T.cyanGlow,
    },

    btnCyan: {
      width: '100%',
      backgroundColor: T.cyan,
      borderRadius: 10,
      paddingVertical: 14,
      alignItems: 'center',
      marginTop: 4,
      shadowColor: T.cyan,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.35,
      shadowRadius: 10,
      elevation: 6,
    },

    btnDanger: {
      width: '100%',
      backgroundColor: T.danger,
      borderRadius: 10,
      paddingVertical: 14,
      alignItems: 'center',
      marginTop: 4,
      shadowColor: T.danger,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.35,
      shadowRadius: 10,
      elevation: 6,
    },

    btnText: {
      fontSize: 12,
      fontWeight: '800',
      color: '#FFFFFF',
      letterSpacing: 2,
      textTransform: 'uppercase',
    },

    resultado: {
      fontSize: 15,
      fontWeight: '700',
      color: T.cyan,
      backgroundColor: T.cyanDim,
      borderWidth: 1,
      borderColor: T.cyan,
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 13,
      marginTop: 8,
      letterSpacing: 0.5,
      width: '100%',
      textAlign: 'center',
      overflow: 'hidden',
    },

    themeToggle: {
      width: 44,
      height: 44,
      borderRadius: 12,
      backgroundColor: T.card,
      borderWidth: 1,
      borderColor: T.border,
      alignItems: 'center',
      justifyContent: 'center',
    },

    themeToggleText: {
      fontSize: 20,
    },

    footer: {
      marginTop: 8,
      marginBottom: 4,
    },

    footerText: {
      fontSize: 10,
      color: T.muted,
      letterSpacing: 0.8,
      textAlign: 'center',
    },
  });
}