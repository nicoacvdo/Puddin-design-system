interface TradingViewWidget {
  new (config: {
    container_id: string;
    symbol: string;
    interval: string;
    theme: string;
    style: string;
    locale: string;
    toolbar_bg: string;
    enable_publishing: boolean;
    allow_symbol_change: boolean;
    save_image: boolean;
    hide_side_toolbar: boolean;
    width: string;
    height: string;
    studies: string[];
    show_popup_button: boolean;
    popup_width: string;
    popup_height: string;
  }): any;
}

interface Window {
  TradingView: {
    widget: TradingViewWidget;
  };
} 