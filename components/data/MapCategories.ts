export interface MapCategory {
  nameKey: string;
  style: {
    fullWidth: boolean;
    disabled: {
      bg: string; // Hexadecimal color code.
      text: string; // Hexadecimal color code.
    };
    enabled: {
      bg: string; // Hexadecimal color code.
      text: string; // Hexadecimal color code.
    };
  };
}

/**
 * Metadata regarding the map categories.
 */
const MapCategories: Record<string, MapCategory> = {
  event: {
    nameKey: 'category-event',
    style: {
      fullWidth: true,
      disabled: {
        bg: '#9e9e9e',
        text: '#000',
      },
      enabled: {
        bg: '#947F17',
        text: '#FFF',
      },
    },
  },
  monster: {
    nameKey: 'category-monster',
    style: {
      fullWidth: false,
      disabled: {
        bg: '#9e9e9e',
        text: '#000',
      },
      enabled: {
        bg: '#c62828',
        text: '#FFF',
      },
    },
  },
  boss: {
    nameKey: 'category-boss',
    style: {
      fullWidth: false,
      disabled: {
        bg: '#9e9e9e',
        text: '#000',
      },
      enabled: {
        bg: '#d84315',
        text: '#FFF',
      },
    },
  },
  nature: {
    nameKey: 'category-nature',
    style: {
      fullWidth: false,
      disabled: {
        bg: '#9e9e9e',
        text: '#000',
      },
      enabled: {
        bg: '#4caf50',
        text: '#000',
      },
    },
  },
  special: {
    nameKey: 'category-special',
    style: {
      fullWidth: false,
      disabled: {
        bg: '#9e9e9e',
        text: '#000',
      },
      enabled: {
        bg: '#DDAABB',
        text: '#000',
      },
    },
  },
  ore: {
    nameKey: 'category-ore',
    style: {
      fullWidth: false,
      disabled: {
        bg: '#9e9e9e',
        text: '#000',
      },
      enabled: {
        bg: '#00bcd4',
        text: '#000',
      },
    },
  },
  chest: {
    nameKey: 'category-chest',
    style: {
      fullWidth: false,
      disabled: {
        bg: '#9e9e9e',
        text: '#000',
      },
      enabled: {
        bg: '#795548',
        text: '#FFF',
      },
    },
  },
};

export default MapCategories;
