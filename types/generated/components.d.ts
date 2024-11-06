import type { Struct, Schema } from '@strapi/strapi';

export interface SharedServiceListing extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_listings';
  info: {
    displayName: 'serviceListing';
    icon: 'apps';
  };
  attributes: {
    serviceImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    serviceText: Schema.Attribute.String;
    serviceDescription: Schema.Attribute.Text;
  };
}

export interface SharedRichtext extends Struct.ComponentSchema {
  collectionName: 'components_shared_richtexts';
  info: {
    displayName: 'Richtext';
    icon: 'bold';
  };
  attributes: {
    Richtext: Schema.Attribute.Blocks;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedPortfolioListing extends Struct.ComponentSchema {
  collectionName: 'components_shared_portfolio_listings';
  info: {
    displayName: 'PortfolioListing';
    icon: 'landscape';
  };
  attributes: {
    title: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_banners';
  info: {
    displayName: 'HeroBanner';
    icon: 'landscape';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    CtaLabel: Schema.Attribute.String;
    Heading: Schema.Attribute.String;
    SubHeading: Schema.Attribute.String;
    CtaLink: Schema.Attribute.String;
  };
}

export interface SharedCallout extends Struct.ComponentSchema {
  collectionName: 'components_shared_callouts';
  info: {
    displayName: 'Callout';
    icon: 'quote';
  };
  attributes: {
    Text: Schema.Attribute.String;
    LeftAlign: Schema.Attribute.Boolean;
  };
}

export interface Shared5050ImageRichtext extends Struct.ComponentSchema {
  collectionName: 'components_shared_50_50_image_richtexts';
  info: {
    displayName: '50-50 Image/Richtext';
    icon: 'bulletList';
  };
  attributes: {
    Richtext: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Reverse: Schema.Attribute.Boolean;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.service-listing': SharedServiceListing;
      'shared.richtext': SharedRichtext;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.portfolio-listing': SharedPortfolioListing;
      'shared.media': SharedMedia;
      'shared.hero-banner': SharedHeroBanner;
      'shared.callout': SharedCallout;
      'shared.50-50-image-richtext': Shared5050ImageRichtext;
    }
  }
}
