/**
 * _Sketch is unexposed in Sketch JavaScript API.  
 * You should never use this namespace,
 * unless use it to extend sketch api in prototype:
 * @example 
 * // here is an example extends the Document
 * import { _Sketch } from "sketch/sketch";
 * declare module 'sketch/sketch' {
 *     namespace _Sketch {
 *         interface Document {
 *             extendFunction(): void;
 *         }
 *     }
 * }
 * sketch.Document.prototype.extendFunction = function (): string {
 *     return 'extendFunction'
 * }
 */
export declare namespace _Sketch {
    /**
     * Javascript API for Sketch without UI, Settings, DataSupplier, Async
     * @example // require without UI, Settings, DataSupplier, Async
     * var sketch: SketchDom = require('sketch/dom');
     */
    class SketchDom {
        /** A Sketch document. */
        Document: typeof Document;
        /** The prototyping action associated with a layer. */
        Flow: typeof Flow;
        /** An image layer. */
        Image: typeof Image;
        /** The style of a Layer. */
        Style: typeof Style;
        /** A Sketch page. It is an instance of both Layer and Group so all the methods defined there are available. */
        Page: typeof Page;
        /** A shape layer. It is shaped by its layers which have boolean operations between them. */
        Shape: typeof Shape;
        /** A Symbol master. It is an instance of Artboard (hence of Layer and Group) so all the methods defined there are available. */
        SymbolMaster: typeof SymbolMaster;
        /** A shared style (either a layer style or a text style). */
        SharedStyle: typeof SharedStyle;
        /** A Sketch slice. */
        Slice: typeof Slice;
        /** A shape path layer. */
        ShapePath: typeof ShapePath;
        /** A group of layers. It is also an instance of Layer so all the methods defined there are available. */
        Group: typeof Group;
        /** A Sketch hotspot. */
        HotSpot: typeof HotSpot;
        /** Enumeration of the available color space settings. */
        Types: typeof Types;
        /** A Sketch artboard. It is an instance of both Layer and Group so all the methods defined there are available. */
        Artboard: typeof Artboard;
        /** A Symbol instance. */
        SymbolInstance: typeof SymbolInstance;
        /** A utility class to represent a rectangle. Contains some methods to make interacting with a rectangle easier. */
        Rectangle: typeof Rectangle;
        /** A text layer. */
        Text: typeof Text;
        /** The SmartLayout object contains the set of possible Smart Layouts that can be applied to SymbolMaster and Group layers. */
        SmartLayout: SmartLayoutObject;
        /** A Sketch layer. This is the base class for most of the Sketch components and defines methods to manipulate them. */
        Layer: typeof Layer;
        /** A Sketch Library. */
        Library: typeof Library;
        /** A Color that references a Color Variable, which you can use anywhere the API expects a Color object. */
        Swatch: typeof Swatch;
        /** Access all the open Documents */
        getDocuments(): Document[];
        /** Access all the Libraries */
        getLibraries(): Library[];
        /**
         * Export an object, using the options supplied.
         * @param object The object to export.
         * @param options Options indicating which sizes and formats to use, etc.
         * @returns The method returns:
         * - undefined if options.output is undefined or a string
         * - an array of Buffers if objectToExport is an array and options.formats is an image format
         * - an array of Objects if objectToExport is an array and options.formats is json
         * - a Buffer if objectToExport is a single item and options.formats is an image format
         * - a Object if objectToExport is a single item and options.formats is json
         */
        export(
            object: Layer | Layer[] | Page | Page[],
            options?: {
                /** this is the path of the folder where all exported files are placed (defaults to "`~/Documents/Sketch Exports`"). If falsey, the data for the objects are returned immediately. */
                output?: string,
                /** Comma separated list of formats to export to (png, jpg, svg, json, tiff, eps, webp or pdf) (default to "png") */
                formats?: string,
                /** Comma separated list of scales which determine the sizes at which the layers are exported (defaults to "1"). */
                scales?: string,
                /** Name exported images using their id rather than their name (defaults to false). */
                'use-id-for-name'?: boolean,
                /** Export only layers that are contained within the group (default to false). */
                'group-contents-only'?: boolean,
                /** Overwrite existing files (if any) with newly generated ones (defaults to false). */
                overwriting?: boolean,
                /** Trim any transparent space around the exported image (leaving it undefined will match Sketch’s behavior: trim for layers that do not have a background color). */
                trimmed?: boolean,
                /** If exporting a PNG, remove metadata such as the colour profile from the exported file (defaults to false). */
                'save-for-web'?: boolean,
                /** If exporting a SVG, make the output more compact (defaults to false). */
                compact?: boolean,
                /** If exporting a SVG, include extra attributes (defaults to false). */
                'include-namespaces'?: boolean,
                /** If exporting a JPG, export a progressive JPEG (only used when exporting to jpeg) (defaults to false). */
                progressive?: boolean,
                /** If exporting a JPG, the compression level to use fo jpeg (with 0 being the completely compressed, 1.0 no compression) (defaults to 1.0). */
                compression?: number,
            }
        ): Buffer | Buffer[] | Object | Object[] | undefined;
        version(): { sketch: string; api: string }
        /**
         * Import a file as a Layer.
         *
         * @param data The data for the file.
         * @param type The type of the file being imported.
         * @returns The method returns:
         * - a Group if the type is svg or if the type is pdf and the pdf has only one page
         * - an Image if the type is bitmap
         * - a Page if the type is pdf and the pdf has multiple pages or eps
         */
        createLayerFromData(data: Buffer | string, type: "svg" | "pdf" | "eps" | "bitmap"): Group | Image | Page;
        fromSketchJSON();
        /**
         * Get the Global Colors
         * @example var sketch = require('sketch/dom')
         * var colors = sketch.globalAssets.colors
         */
        get globalAssets(): Assets;
        /** The selected Document or undefined if no document is open. */
        getSelectedDocument(): Document | undefined;
        get getGlobalColors(): ColorAsset[];
        get getGlobalGradients(): GradientAsset[];
        /**
         * Find Layers fitting some criteria.
         * Selectors are of type string and can be the following:
         * `name, id, frame, frame.x, frame.y, frame.width, frame.height, locked, hidden, selected, type, style.fills.color`  
         * You can use these selectors in conjunction with an operator:
         * `= (equal)`, `*= (contains)`, `$= (endswith)`, `!= (not equal)`, `^= (begins with)`, `>= (greater than or equal)`, `=< (less than or equal)`, `> (greater than)`, `< (less than)`
         * 
         * Some Selectors have shorthand notation
         * - type: find('ShapePath', document)
         * - id: find(`#${layer_id}`, document)or find("#91EC1D70-6A97-...-DEE84160C4F4", document)
         * - all others: find('[="Something"]', document)
         * @param selector The object to export.
         * @param scope The scope of the search. By default it is the current Document.
         * @example
         * var sketch = require('sketch/dom')
         * sketch.find('Shape')
         * // find all the Shapes in the current Document
         * sketch.find('Shape')
         * // find all the Layers in the first Page of the Document
         * sketch.find('*', document.pages[0])
         * // find all the Layers named "Layer-Name"
         * sketch.find('[name="Layer-Name"]')
         * // find all the Shape named "Layer-Name"
         * sketch.find('Shape, [name="Layer-Name"]')
         */
        find<T>(selector: string, scope?: Document | Artboard | Page | Group): T[];
        /**
         * A utility function to get a wrapped object from a native Sketch model object.
         * @param object The native Sketch model object to wrap.
         * @returns The wrapped object of the right type (you can check is type with wrappedObject.type), eg. a native document will be wrapped as a Document while a native text layer will be wrapped as a Text.
         */
        fromNative<T>(object: object): T;
    }
    /**
     * Javascript API for Sketch
     * @example var sketch: Sketch = require('sketch');
     */
    class Sketch extends SketchDom {
        /** A set of functions to show some user interfaces. The set is small on purpose. Any more complex UI should be provided by third party libraries and doesn’t need to be in the core. */
        UI: UI;
        /** A way to keep track of a asynchronous task. The script will stay alive as long as at least one fiber is running. */
        Async: Async;
        /** A set of functions to handle user settings. The settings are persisted when the user closes Sketch. */
        Settings: Settings;
        /** When your plugin supplies some data, don’t forget to set the suppliesData field to true in your manifest.json! */
        DataSupplier: typeof DataSupplier;
    }
    class Component {
        /** returns the native Sketch model object. */
        get sketchObject(): any;
        /** returns a string that represent the type of the component. If it’s undefined, it means that we couldn’t match the native object and that we returned a really lightweight wrapper. */
        get type(): Types | undefined;
        /** returns true if the component is wrapping an immutable version of a native Sketch model object. If that is the case, you won’t be able to mutable the object (setting any property will be a no-op). */
        isImmutable(): boolean;
        /** return a JSON object that represent the component */
        toJSON(): any;
    }
    /** A Sketch document. */
    class Document extends Component {
        /** returns a wrapped object from a native Sketch model object */
        static fromNative(sketchObject: object): Document;
        /** return a JSON object that represent the component */
        toJSON(): any;
        constructor(options?: {
            colorSpace: ColorSpace,
        });
        /** The unique ID of the document. */
        id: string;
        /** The pages of the document. */
        pages: Page[];
        /** The selected page of the Document. */
        selectedPage: Page;
        /** The Selection of the layers that the user has selected in the currently selected page. */
        get selectedLayers(): Selection;
        /**
         * The path to the document (or the appcast URL 
         * in case of a Document from a remote Library).
         */
        path: string;
        /**
         * The list of all shared layer styles defined 
         * in the document.
         */
        sharedLayerStyles: SharedStyle[];
        /**
         * The list of all shared text styles defined 
         * in the document.
         */
        sharedTextStyles: SharedStyle[];
        /**
         * A list of color assets defined in the 
         * document. Mutating the returned array will 
         * update the document colors.
         * @deprecated use Document.swatches instead.
         */
        colors: ColorAsset[];
        /**
         * A list of swatches defined in the document. 
         * Mutating the returned array will update the document swatches.
         */
        swatches: Swatch[];
        /**
         * A list of gradient assets defined in the 
         * document. Mutating the returned array will 
         * update the document gradients.
         */
        gradients: GradientAsset[];
        /** The color space of the document. */
        colorSpace: ColorSpace;
        /**
         * A method to help find the first layer in this document 
         * which has the given id.
         * @returns Return a Layer object or undefined if it’s not found.
         * @param layerId The ID of the layer to find
         */
        getLayerWithID(layerId: string): Layer | undefined;
        /**
         * A method to help find the layers in this document which 
         * have the given name.
         * @returns Return an array of Layer.
         * @param name The name of the layer to find
         */
        getLayersNamed(name: string): Layer;
        /**
         * A method to help find a shared style in the document.
         * @returns Return a SharedStyle object or undefined if it’s not found.
         * @param sharedStyleId The ID of the shared style to find
         */
        getSharedLayerStyleWithID(sharedStyleId: string): SharedStyle | undefined;
        /**
         * A method to help find a shared style in the document.
         * @returns Return a SharedStyle object or undefined if it’s not found.
         * @param sharedStyleId The ID of the shared style to find
         */
        getSharedTextStyleWithID(sharedStyleId: string): SharedStyle | undefined;
        /**
         * A method to get all symbol masters defined in the document.
         * @returns Return an array of the SymbolMaster objects defined 
         * in the document.
         */
        getSymbols(): SymbolMaster[];
        /**
         * A method to help find a symbol master in the document.
         * @returns Return a SymbolMaster object or undefined if it’s not found.
         * @param symbolId The symbol ID of the symbol master to find
         */
        getSymbolMasterWithID(symbolId: string): SymbolMaster | undefined;
        /**
         * A method to help center the view of the document window on a given layer.
         * @param layer The layer to center the view onto
         */
        centerOnLayer(layer: Layer): void;
        /**
         * A method to save a document to a specific path 
         * or ask the user to choose where to save it. 
         * The method is asynchronous so if you want to 
         * do something after the document is saved, 
         * make sure that you pass a callback and continue 
         * your script there.
         * 
         * A function called after the document is saved. 
         * It is called with an Error if saving the Document 
         * was unsuccessful.
         * @param path 
         * @param callback 
         */
        save(path?: string, callback?: (error) => void): void;
        /**
         * A method to save a document to a specific path 
         * or ask the user to choose where to save it. 
         * The method is asynchronous so if you want to 
         * do something after the document is saved, 
         * make sure that you pass a callback and continue 
         * your script there.
         * 
         * A function called after the document is saved. 
         * It is called with an Error if saving the Document 
         * was unsuccessful.
         * @param path 
         * @param options
         * @param callback 
         */
        save(path?: string, options?: { saveMode: SaveMode }, callback?: (error) => void): void;
        /** A method to close a document. */
        close();
        /**
         * A method to change a document’s color space. 
         * For an in-depth discussion of this topic and 
         * the difference between assigning and converting 
         * the color space check the color management 
         * documentation.
         * 
         * By default the method assigns a new color space.
         * Pass true as an optional second argument 
         * to convert instead of assign
         * @param colorSpace 
         * @param convert 
         */
        changeColorSpace(colorSpace: ColorSpace, convert?: boolean)
        /** Enumeration of the available color space settings. */
        static get ColorSpace(): typeof ColorSpace;
        /** The selected Document or undefined if no document is open. */
        static getSelectedDocument(): Document | undefined;
        /** Access all the open Documents */
        static getDocuments(): Document[];
        /**
         * A method to open an existing sketch document or ask the 
         * user to open one. The method is asynchronous so if you 
         * want to do something after the document is opening it, 
         * make sure that you pass a callback and continue your 
         * script there.
         * @param callback A function called after the document is 
         * opened. It is called with an Error if opening the Document 
         * was unsuccessful and a Document (or undefined).
         */
        static open(callback?: (err: Error, document?: Document) => void);
        /**
         * A method to open an existing sketch document or ask the 
         * user to open one. The method is asynchronous so if you 
         * want to do something after the document is opening it, 
         * make sure that you pass a callback and continue your 
         * script there.
         * @param path The path to the document to open. 
         * If undefined, the user will be asked to select one.
         * @param callback A function called after the document is 
         * opened. It is called with an Error if opening the Document 
         * was unsuccessful and a Document (or undefined).
         */
        static open(path: string, callback?: (err: Error, document?: Document) => void);
        static get SaveMode(): typeof SaveMode;
    }
    /** A Sketch Library. */
    class Library extends Component {
        /** returns a wrapped object from a native Sketch model object */
        static fromNative(sketchObject: object): Library;
        /** The unique ID of the Library. */
        get id(): string;
        /** The name of the Library. */
        get name(): string;
        /** If Sketch has been able to load the Library. If the library is not valid, the methods will often not be available so always check this field before doing something with a library. */
        get valid(): boolean;
        /** If the user has enabled the Library. */
        enabled: boolean;
        /** The type of Library. */
        get libraryType(): LibraryType;
        /** The date at which the library was last updated */
        get lastModifiedAt(): Date;
        /** A method to remove an existing library. */
        remove(): void;
        /**
         * A library references a Sketch Document and you can access it with this method.
         * @returns The Document that the Library references. It can throw an error if the Document cannot be accessed.
         */
        getDocument(): Document;
        /**
         * Get the Symbols that can be imported  
         * To import a symbol from a Library, do not access its Document and look for the SymbolMaster directly. Instead, get the Symbol References of the Library and use those to import them.  
         * Those references depends on the document you want to import them into. For example if a document has already imported a symbol, it will reference the local version to keep all the instances in sync.
         * @returns An array of Shareable Object that represents the Symbols which you can import from the Library.
         */
        getImportableSymbolReferencesForDocument(document: Document): ImportableObject[];
        /**
         * Get the Shared Layer Styles that can be imported  
         * To import a shared style from a Library, do not access its Document and look for the SharedStyle directly. Instead, get the Shared Layer Style References of the Library and use those to import them.  
         * Those references depends on the document you want to import them into. For example if a document has already imported a shared style, it will reference the local version to keep all the instances in sync.
         * @param document 
         * @returns An array of Shareable Object that represents the Symbols which you can import from the Library.
         */
        getImportableLayerStyleReferencesForDocument(document: Document): ImportableObject[];
        /**
         * Get the Text Styles that can be imported  
         * To import a shared style from a Library, do not access its Document and look for the SharedStyle directly. Instead, get the Shared Layer Style References of the Library and use those to import them.  
         * Those references depends on the document you want to import them into. For example if a document has already imported a shared style, it will reference the local version to keep all the instances in sync.
         * @param document 
         * @returns An array of Shareable Object that represents the Symbols which you can import from the Library.
         */
        getImportableTextStyleReferencesForDocument(document: Document): ImportableObject[];
        /**
         * Get the Shared Swatches that can be imported
         * To import a Swatch from a Library, do not access its Document and look for the Swatch directly. Instead, get the Shared Swatch References of the Library and use those to import them.
         * Those references depends on the document you want to import them into. For example if a document has already imported a shared Swatch, it will reference the local version to keep all the instances in sync.
         * @param document 
         * @returns An array of Shareable Object that represents the Shared Swatches which you can import from the Library.
         */
        getImportableSwatchReferencesForDocument(document: Document): ImportableObject[];
        /** Enumeration of the types of Library. */
        static get LibraryType(): typeof LibraryType;
        /** Enumeration of the types of Importable Objects. */
        static get ImportableObjectType(): typeof ImportableObjectType;
        /** Access all the Libraries */
        static getLibraries(): Library[];
        /**
         * Get a Library from a path  
         * Get the library for a local Sketch document. If the Document was already added as a Library, it will simply return it. If it is not already a Library, it will be added.
         * @param path 
         */
        static getLibraryForDocumentAtPath(path: string): Library;
        /**
         * Get a remote Library from an RSS feed URL  
         * Get the remote library for an RSS feed. If the RSS feed was already added as a Library, it will simply return it. If it is not already a Library, it will be added.
         * @param url The URL to the rss feed describing the versions of the library.
         * @param callback A function called after the library is added. It is called with an Error if adding the Library was unsuccessful and a Library (or undefined).
         */
        static getRemoteLibraryWithRSS(url: string, callback: (err, library?: Library) => void): void;
    }
    /** The style of a Layer. */
    class Style extends Component {
        /** The unique ID of the Style. */
        id: string;
        /** returns a wrapped object from a native Sketch model object */
        static fromNative(sketchObject: object): Style;
        /** The opacity of a Layer, between 0 (transparent) and 1 (opaque). */
        opacity: number;
        /** The blend mode used to determine the composite color. */
        blendingMode: BlendingMode;
        /** The blur applied to the Layer. */
        blur: Blur;
        /** The fills of a Layer. */
        fills: Fill[];
        /** The borders of a Layer. */
        borders: Border[];
        /** The options that the borders share. */
        borderOptions: BorderOptions;
        /** The shadows of a Layer. */
        shadows: Shadow[];
        /** The inner shadows of a Layer. */
        innerShadows: Shadow[];
        /** The horizontal alignment of the text of a Text Layer */
        alignment: Alignment;
        /** The vertical alignment of the text of a Text Layer */
        verticalAlignment: VerticalAlignment;
        /** The kerning between letters of a Text Layer. null means that the kerning will be the one defined by the font. */
        kerning: number | null;
        /** The height of a line of text in a Text Layer. null means “automatic”. */
        lineHeight: number | null;
        /** The space between 2 paragraphs of text in a Text Layer. */
        paragraphSpacing: number;
        /** A rgba hex-string (`#000000ff` is opaque black) of the color of the text in a Text Layer. */
        textColor: string;
        /** The size of the font in a Text Layer. */
        fontSize: number;
        /** The transform applied to the text of a Text Layer. */
        textTransform: 'none' | 'uppercase' | 'lowercase';
        /** The name of the font family of a Text Layer. 'system' means the font family of the OS ('.SF NS Text' on macOS 10.14). */
        fontFamily: string;
        /** The weight of the font of a Text Layer. Goes from 0 to 12, 0 being the thinest and 12 being the boldest. Not every weight are available for every fonts. When setting a font weight that does not exist for the current font family, the closest weight that exists will be set instead. */
        fontWeight: number;
        /** The style of the font of a Text Layer. */
        fontStyle?: 'italic';
        /** The variant of the font of a Text Layer. */
        fontVariant?: 'small-caps';
        /** The size variant of the font of a Text Layer. */
        fontStretch: 'compressed' | 'condensed' | 'narrow' | 'expanded' | 'poster' | undefined;
        /**
         * The underline decoration of a Text Layer.  
         * string: <line-style> [<line-pattern>] ['by-word'] / undefined where <line-style> can be single / thick / double and <line-pattern> can be dot / dash / dash-dot / dash-dot-dot
         */
        textUnderline?: string;
        /**
         * The strikethrough decoration of a Text Layer.  
         * string: <line-style> [<line-pattern>] ['by-word'] / undefined where <line-style> can be single / thick / double and <line-pattern> can be dot / dash / dash-dot / dash-dot-dot
         */
        textStrikethrough?: string;
        /** The axes of the Text Layer font (only available when the font is a variable font). */
        fontAxes: FontAxes;
        /**
         * Get the default line height  
         * When no line height is specified, style.lineHeight will be undefined. You can get the default line height of the font using style.getDefaultLineHeight().
         * @returns A number if the layer is a Text layer or undefined.
         */
        getDefaultLineHeight(): number | undefined;
        /** Check if the Style is in sync with a Shared Style */
        isOutOfSyncWithSharedStyle(sharedStyle: SharedStyle): boolean;
        /** Sync the Style with a Shared Style  */
        syncWithSharedStyle(sharedStyle: SharedStyle): void;
        static get GradientType(): typeof GradientType;
        static get BlendingMode(): typeof BlendingMode;
        static get BlurType(): typeof BlurType;
        static get FillType(): typeof FillType;
        static get PatternFillType(): typeof PatternFillType;
        static get BorderPosition(): typeof BorderPosition;
        static get Arrowhead(): typeof Arrowhead;
        static get LineEnd(): typeof LineEnd;
        static get LineJoin(): typeof LineJoin;

    }
    /** A shared style (either a layer style or a text style). */
    class SharedStyle extends Component {
        /** returns a wrapped object from a native Sketch model object */
        static fromNative(sketchObject: object): SharedStyle;
        /** The unique ID of the Shared Style. */
        id: string;
        /** The type of the Shared Style. */
        styleType: StyleType;
        /** The name of the Shared Style. */
        name: string;
        /** The Style value that is shared. */
        style: Style;
        /**
         * Get all the Instances
         * @returns Returns an array of all instances of the Shared Style in the document, on all pages.
         */
        getAllInstances(): Style[];
        /**
         * Get all the Instances’ Layers
         * @returns Returns an array of all layers with a Style which is an instance of the Shared Style in the document, on all pages.
         */
        getAllInstancesLayers(): Layer[];
        /**
         * Get Library defining the style
         * @returns The Library the Shared Style was defined in, or null if it is a local shared style.
         */
        getLibrary(): Library;
        /**
         * Sync the local reference with the library version  
         * If a Library has some updates, you can synchronize the local Shared Style with the Library’s version and bypass the panel where the user chooses the updates to bring.
         * @returns true if it succeeded.
         */
        syncWithLibrary(): boolean;
        /**
         * Unlink the local reference from the library  
         * You can unlink a Shared Style from the Library it comes from and make it a local Shared Style instead.
         * @returns true if it succeeded.
         */
        unlinkFromLibrary(): boolean;
        /**
         * Create a new Shared Style with a specific name in a specific Document.
         * @param options 
         */
        static fromStyle(options: { name: string, style: Style, document: Document }): SharedStyle;
        static get StyleType(): typeof StyleType;
    }
    type BackTarget = object;
    /** The prototyping action associated with a layer. */
    class Flow {
        /**The target artboard of the action or `Flow.BackTarget` if the action is a back action */
        target: Artboard | BackTarget
        targetId: string | BackTarget;
        animationType: AnimationType;
        static get BackTarget(): BackTarget;
        static get AnimationType(): typeof AnimationType;
    }
    /** An export format associated with a layer. */
    class ExportFormat {
        /** The file format of the export. */
        fileFormat: 'jpg' | 'png' | 'tiff' | 'eps' | 'pdf' | 'webp' | 'svg';
        /** The prefix added to the file name. */
        prefix: string | undefined;
        /** The suffix added to the file name. */
        suffix: string | undefined;
        size: '2x' | '100w' | '100width' | '100px' | '300h' | '300height';
    }
    /**
     * A utility class to represent the layers selection. 
     * Contains some methods to make interacting with a 
     * selection easier.
     */
    class Selection {
        /** The Layers in the selection. Setting this property will change the selection. */
        layers: Layer[];
        /** The number of Layers in the selection. */
        get length(): number;
        /** Does the selection contain any layers? */
        get isEmpty(): boolean;
        /**
         * Clears the selection.
         * @Returns Return the selection (useful if you want to chain the calls).
         */
        clear(): Selection;
    }
    /** A utility class to represent a curve point (with handles to control the curve in a path). */
    class CurvePoint extends Component {
        /** The position of the point. */
        point: Point;
        /** The position of the handle control point for the incoming path. */
        curveFrom: Point;
        /** The position of the handle control point for the outgoing path. */
        curveTo: Point;
        /** The corder radius of the point. */
        cornerRadius: number;
        /** The type of the point. */
        pointType: PointType;
        /** Check if the point is selected */
        isSelected(): boolean;
        /** Enumeration of the type of Shared Style. */
        static get PointType(): typeof PointType;
    }
    /** A utility class to represent a point. */
    class Point extends Component {
        /** The x coordinate of the point. */
        x: number;
        /** The y coordinate of the point. */
        y: number;
        /** @returns Return the Point as a CGPoint. */
        asCGPoint(): any;
        /** @returns Return the Point as a NSPoint. */
        asNSPoint(): any;
    }
    /** A utility class to represent a rectangle. Contains some methods to make interacting with a rectangle easier. */
    class Rectangle extends Component {
        constructor(x: number, y: number, width: number, height: number);
        /** The x coordinate of the top-left corner of the rectangle. Or an object with {x, y, width, height} */
        x: number;
        /** The y coordinate of the top-left corner of the rectangle. */
        y: number;
        /** The width of the rectangle. */
        width: number;
        /** The height of the rectangle. */
        height: number;
        /**
         * Adjust the rectangle by offsetting it.
         * @param x 
         * @param y 
         * @returns Return this rectangle (useful if you want to chain the calls).
         */
        offset(x: number, y: number): Rectangle;
        /**
         * Adjust the rectangle by scaling it. The scaleHeight argument can be omitted to apply the same factor on both the width and the height.
         * @param scaleWidth 
         * @param scaleHeight 
         * @returns Return this rectangle (useful if you want to chain the calls).
         */
        scale(scaleWidth, scaleHeight): Rectangle;
        /**
         * Change the coordinates basis  
         * Each layer defines its own system of coordinates (with its origin at the top left of the layer). You can change that basis from one layer to the other with changeBasis.
         * 
         * @example var newRect = rect.changeBasis({
         *   from: layerA,
         *   to: layerB,
         * })
         * 
         * var parentRect = rect.changeBasis({
         *   from: layerA,
         *   to: layerA.parent,
         * })
         * var pageRect = rect.changeBasis({
         *   from: layerA,
         *   // leaving out `to` means changing the
         *   // basis to the Page's basis
         * })
         * @param change Both from and to can be omitted (but not at the same time) to change the basis from/to the Page coordinates.
         */
        changeBasis(change: {
            /** The layer in which the rectangle’s coordinates are expressed. */
            from?: Layer,
            /** The layer in which the rectangle’s coordinates will be expressed. */
            to?: Layer,
        }): Rectangle;
        /** Get a CGRect */
        asCGRect(): any;
        /** Get an NSRect */
        asNSRect(): any;
    }
    class SmartLayoutObject {
        /** Smart Layout flowing left to right */
        get LeftToRight(): SmartLayout;
        /** Smart Layout expanding horizontally from the center */
        get HorizontallyCenter(): SmartLayout;
        /** Smart Layout flowing right to left */
        get RightToLeft(): SmartLayout;
        /** Smart Layout flowing from top to bottom */
        get TopToBottom(): SmartLayout;
        /** Smart Layout expanding verically from the center */
        get VerticallyCenter(): SmartLayout;
        /** Smart Layout flowing from bottom to top */
        get BottomToTop(): SmartLayout;
    }
    /** The SmartLayout object contains the set of possible Smart Layouts that can be applied to SymbolMaster and Group layers. */
    class SmartLayout { }
    /** A Sketch layer. This is the base class for most of the Sketch components and defines methods to manipulate them. */
    class Layer extends Component {
        /** returns a wrapped object from a native Sketch model object */
        static fromNative(sketchObject: object): Layer;
        /** The unique ID of the Layer. */
        id: string;
        /** The name of the Layer */
        name: string;
        /** The group the layer is in. */
        parent: Group | Artboard | Page | Document;
        /** If the layer is locked. */
        locked: boolean;
        /** If the layer is hidden. */
        hidden: boolean;
        /**
         * The frame of the Layer. This is given in coordinates 
         * that are local to the parent of the layer.
         */
        frame: Rectangle;
        /** If the layer is selected. */
        selected: boolean;
        /** The prototyping action associated with the layer. */
        flow: Flow;
        /** The export formats of the Layer. */
        exportFormats: ExportFormat[];
        /** The transformation applied to the Layer. */
        transform: {
            /** The rotation of the Layer in degrees, clock-wise. */
            rotation: number;
            /** If the layer is horizontally flipped. */
            flippedHorizontally: boolean;
            /** If the layer is vertically flipped. */
            flippedVertically: boolean;
        };
        /**
         * The index of this layer in its parent. 
         * The layer at the back of the parent (visually) 
         * will be layer 0. The layer at the front will 
         * be layer n - 1 (if there are n layers).
         * 
         * You can set the index of the layer to move 
         * it in the hierarchy.
         */
        index: number;
        /** The style of the Layer. */
        style: Style;
        /**
         * Duplicate the Layer
         * @returns A new Layer.
         */
        duplicate(): Layer;
        /**
         * Remove this layer from its parent.
         * @returns The current layer (useful if you want to chain the calls).
         */
        remove(): Layer;
        /**
         * Move this layer to the front of its parent.
         * @returns The current layer (useful if you want to chain the calls).
         */
        moveToFront(): Layer;
        /**
         * Move this layer forward in its parent.
         * @returns The current layer (useful if you want to chain the calls).
         */
        moveForward(): Layer;
        /**
         * Move this layer backward in its parent.
         * @returns The current layer (useful if you want to chain the calls).
         */
        moveBackward(): Layer;
        /** access the page the layer is in */
        getParentPage(): Page;
        /** access the artboard the layer is in (if any) */
        getParentArtboard(): Artboard;
        /** access the symbol master the layer is in (if any) */
        getParentSymbolMaster(): SymbolMaster;
        /** access the shape the layer is in (if any) */
        getParentShape(): Shape;
        /** The Layers that this component groups together. */
        layers?: Layer[]; // https://github.com/qjebbs/sketch.d.ts/issues/2
    }
    /** A group of layers. It is also an instance of Layer so all the methods defined there are available. */
    class Group extends Layer {
        /** returns a wrapped object from a native Sketch model object */
        static fromNative(sketchObject: object): Group;
        /** Create a new Group */
        constructor(options?: {
            parent?: Group | Artboard | Page,
            layers?: {
                type?: Types,
                text?: string,
            }[];
        } & ILayerConstructorOptions);
        /** The associated shared style or null. */
        sharedStyle: SharedStyle;
        /** The Layers that this component groups together. */
        layers: Layer[];
        /** The Group’s Smart Layout. */
        smartLayout: SmartLayout;
        /**
         * Adjust the group to fit its children.
         * @returns The current group (useful if you want
         *  to chain the calls).
         */
        adjustToFit(): Group;
    }
    /** A Sketch page. It is an instance of both Layer and Group so all the methods defined there are available. */
    class Page extends Group {
        /** returns a wrapped object from a native Sketch model object */
        static fromNative(sketchObject: object): Page;
        constructor(options?: {
            parent?: Document,
        } & ILayerConstructorOptions);
        /** The Layers that this component groups together. */
        layers: Layer[];
        parent: Document;
        /**
         * A method to get the Symbols Page of a Document.
         * @returns Return a Page or undefined if there is no Symbols Page yet.
         * @param document The document from which you want the Symbols Page.
         */
        static getSymbolsPage(document: Document): Page | undefined;
        /**
         * Create the Symbols Page
         * 
         * A method to create the Page with the name that Sketch will recognize as the Symbols Page.
         * @returns Return a Page.
         * @example var symbolsPage = Page.createSymbolsPage();symbolsPage.parent = document
         */
        static createSymbolsPage(): Page;
        /** A method to tell if the page is the Symbols Page. */
        isSymbolsPage(): boolean;
    }
    /** A Sketch artboard. It is an instance of both Layer and Group so all the methods defined there are available. */
    class Artboard extends Group {
        /** returns a wrapped object from a native Sketch model object */
        static fromNative(sketchObject: object): Artboard;
        constructor(options?: {
            flowStartPoint?: boolean,
            parent?: Page,
        } & ILayerConstructorOptions);
        parent: Page;
        /** The Layers that this component groups together. */
        layers: Layer[];
        /** A Start Point allows you to choose where to start your prototype from. */
        flowStartPoint: boolean;
        /** The background of the Artboard */
        background: {
            /** If the background should be enabled, eg. shown or not */
            enabled: boolean;
            /** If the background should be exported or if it should be transparent during the export */
            includedInExport: boolean;
            /** The rgba representation of the color of the background */
            color: string;
        };
    }
    /** A shape layer. It is shaped by its layers which have boolean operations between them. */
    class Shape extends Layer {
        /** returns a wrapped object from a native Sketch model object */
        static fromNative(sketchObject: object): Shape;
        constructor(optoins?: {
            parent?: Group | Artboard | Page,
        } & ILayerConstructorOptions);
        /** The style of the Shape. */
        style: Style;
        /** The associated shared style or null. */
        sharedStyle: SharedStyle;
        /** The Layers that this component groups together. */
        layers: ShapePath[];
    }
    /** An image layer. */
    class Image extends Layer {
        /** returns a wrapped object from a native Sketch model object */
        static fromNative(sketchObject: object): Image;
        /**
         * Create a new Image.
         * 
         * The image property accept a wide range of input:
         * an ImageData
         * - a Buffer
         * - a native NSImage
         * - a native NSURL
         * - a native MSImageData
         * - a string: path to the file to load the image from
         * - an object with a path property: path to the file to load the image from
         * - an object with a base64 string: a base64 encoded image
         * @param options 
         */
        constructor(options?: {
            parent?: Group | Artboard | Page,
        } & ILayerConstructorOptions);
        /** The style of the Image. */
        style: Style;
        /** The associated shared style or null. */
        sharedStyle: SharedStyle;
        /** The ID of the SharedStyle or null, identical to sharedStyle.id. */
        sharedStyleId: string | null;
        /** The actual image of the layer. */
        image: ImageData;
        /** No sub layer for Image. */
        layers: undefined;
    }
    /** A shape path layer. */
    class ShapePath extends Layer {
        /** returns a wrapped object from a native Sketch model object */
        static fromNative(sketchObject: object): ShapePath;
        /**
         * Create a new ShapePath
         * 
         * You can only set the shapeType when creating a new one. Once it is created, the shapeType is read-only. If it is not specified and you do not specify any points, it will default to ShapePath.ShapeType.Rectangle (if you do specify some points, it will default to ShapePath.ShapeType.Custom).
         * @example const shapePath = new ShapePath({
         * name: 'my shape path',
         * shapeType: ShapePath.ShapeType.Oval,
         * })
         * @param options 
         */
        constructor(options?: {
            shapeType?: ShapeType,
            parent?: Shape | Group,
        } & ILayerConstructorOptions)
        /** The style of the ShapePath. */
        style: Style;
        /** The associated shared style or null. */
        sharedStyle: SharedStyle;
        /** The ID of the SharedStyle or null, identical to sharedStyle.id. */
        sharedStyleId: string | null;
        /** The type of the Shape Path. It can only be set when creating a new ShapePath. */
        shapeType: ShapeType;
        /** The points defining the Shape Path. */
        points: CurvePoint[];
        /** If the Path is closed. */
        closed: boolean;
        /** The Layers that this component groups together. */
        layers?: ShapePath[];
        /** Returns a string representing the SVG path of the ShapePath. */
        getSVGPath(): string;
        /** Enumeration of the type of Shared Style. */
        static get ShapeType(): typeof ShapeType;
        /** Enumeration of the type of point types. */
        static get PointType(): typeof PointType;
        /**
         * create a new ShapePath from an SVG path
         * @example const shapePath = ShapePath.fromSVGPath('M10 10 H 90 V 90 H 10 L 10 10')
         * @param svg 
         */
        static fromSVGPath(svg: string): ShapePath;
    }
    /** A text layer. */
    class Text extends Layer {
        /** returns a wrapped object from a native Sketch model object */
        static fromNative(sketchObject: object): Text;
        /**
         * Create a new Text
         * @example var text = new Text({
         * text: 'my text',
         * alignment: Text.Alignment.center,
         * })
         */
        constructor(options?: {
            text: string,
            parent?: Group | Artboard | Page,
            alignment?: Alignment | VerticalAlignment,
        } & ILayerConstructorOptions);
        /** The text content of the Text */
        text: string;
        /** The style of the Text. */
        style: Style;
        /** The associated shared style or null. */
        sharedStyle: SharedStyle;
        /** The ID of the SharedStyle or null, identical to sharedStyle.id. */
        sharedStyleId: string | null;
        /** The line spacing of the layer. */
        lineSpacing: LineSpacing;
        /** Whether the layer should have a fixed width or a flexible width. */
        fixedWidth: boolean;
        /** Returns a array of the text fragments for the text. Each one is a object containing a rectangle, a baseline offset, the range of the fragment, and the substring {rect, baselineOffset, range, text}. */
        fragments: { rect, baselineOffset, range, text }[];
        /** Adjust the Text to fit its value. */
        adjustToFit(): Text;
        /** No sub layer for Text. */
        layers: undefined;
        /** Enumeration of the line spacing behavior for the text. */
        static get LineSpacing(): typeof LineSpacing;
        static get Alignment(): typeof Alignment;
        static get VerticalAlignment(): typeof VerticalAlignment;
    }
    /** A Symbol master. It is an instance of Artboard (hence of Layer and Group) so all the methods defined there are available. */
    class SymbolMaster extends Artboard {
        /** returns a wrapped object from a native Sketch model object */
        static fromNative(sketchObject: object): SymbolMaster;
        constructor(options?: {
            parent?: Group | Artboard | Page
        } & ILayerConstructorOptions);
        /** The unique ID of the Symbol that the master and its instances share. */
        symbolId: string;
        /** The array of the overrides that the instances of the Symbol Master will be able to change. */
        overrides: Override[];
        /** Replace the symbol master with an artboard and detach all its instances converting them into groups. */
        toArtboard(): Artboard;
        /** Creates a new SymbolInstance linked to this master, ready for inserting in the document. */
        createNewInstance(): SymbolInstance;
        /** Returns an array of all instances of the symbol in the document, on all pages. */
        getAllInstances(): SymbolInstance[];
        /**
         * Get Library defining the Symbol Master
         * If the Symbol Master was imported from a library, the method can be used to:
         * - know about it
         * - get the library back
         * @returns The Library the symbol was defined in, or null if it is a local symbol.
         */
        getLibrary(): Library;
        /**
         * Sync the local reference with the library version
         * 
         * If a Library has some updates, you can synchronize the local Symbol Master with the Library’s version and bypass the panel where the user chooses the updates to bring.
         * @returns true if it succeeded.
         */
        syncWithLibrary(): boolean;
        /**
         * Unlink the local reference from the library
         * 
         * You can unlink a Symbol Master from the Library it comes from and make it a local Symbol Master instead. It will be added to the Symbols Page.
         * 
         * @returns true if it succeeded.
         */
        unlinkFromLibrary(): boolean;
        /**
         * Replace the artboard with a symbol master.
         * @param artboard The artboard to create the master from.
         * @returns A new SymbolMaster
         */
        static fromArtboard(artboard: Artboard): SymbolMaster;
    }
    /** A Symbol instance. */
    class SymbolInstance extends Layer {
        /** returns a wrapped object from a native Sketch model object */
        static fromNative(sketchObject: object): SymbolInstance;
        /**
         * Create a new Symbol Instance
         * @param options 
         */
        constructor(options?: {
            symbolId: string,
            parent?: Group | Artboard | Page,
        } & ILayerConstructorOptions)
        /** The style of the Symbol Instance. */
        style: Style;
        /** The unique ID of the Symbol that the instance and its master share. */
        symbolId: string;
        /** The Symbol master that the instance is linked to. */
        master: SymbolMaster;
        /** The array of the overrides to modify the instance. */
        overrides: Override[];
        /** No sub layer for SymbolInstance. */
        layers: undefined;
        /**
         * Detach the instance.
         * Replaces a group that contains a copy of the Symbol this instance refers to. Returns null if the master contains no layers instead of inserting an empty group
         * @param options The options to apply when detaching the instance.
         * @returns A new Group or null
         */
        detach(options?: {
            /** If it should detach the nested symbols as well. Default to false. */
            recursively: boolean;
        }): Group;
        /**
         * Change the value of the override.
         * @param override The override to change.
         * @param value The value of override to set. Can be a string or an NSImage or a symbolId depending on the type of the override.
         * @returns The current Symbol instance (useful if you want to chain the calls).
         */
        setOverrideValue(override: Override, value: string | any/*NSImage*/): SymbolInstance;
        /**
         * Trigger a Smart Layout.  
         * In order to trigger a Smart Layout resize in an instance, for example after changing an override value, call the resizeWithSmartLayout() method.
         */
        resizeWithSmartLayout(): void;
    }
    /** A Sketch hotspot. */
    class HotSpot extends Layer {
        /** No sub layer for HotSpot. */
        layers: undefined;
        /** returns a wrapped object from a native Sketch model object */
        static fromNative(sketchObject: object): HotSpot;
        constructor(options?: {
            flow: {
                target: Artboard,
            },
            parent?: Group | Artboard | Page,
        } & ILayerConstructorOptions);
        /**
         * Create a new Hotspot from a Layer
         * @example var hotspot = HotSpot.fromLayer(layer)
         */
        fromLayer(layer: Layer): HotSpot;
    }
    /** A Sketch slice. */
    class Slice extends Layer {
        /** No sub layer for Slice. */
        layers: undefined;
        /** returns a wrapped object from a native Sketch model object */
        static fromNative(sketchObject: object): HotSpot;
    }
    /** A Symbol override. This component is not exposed, it is only returned when accessing the overrides of a Symbol Instance or Symbol Master. The overrides are not available until after the instance is injected into the document. */
    class Override {
        /** The path to the override. It’s formed by the symbolId of the nested symbols separated by a `/`. */
        path: string;
        /** The property that this override controls. It can be `"stringValue"` for a text override, `"symbolID"` for a nested symbol, `"layerStyle"` for a shared layer style override, `"textStyle"` for a shared text style override, `"flowDestination"` for a Hotspot target override or `"image"` for an image override. */
        property: string;
        /** The unique ID of the override (`${path}_${property}`). */
        id: string;
        /** If the override is a nested symbol override. */
        symbolOverride: boolean;
        /** The value of the override which can be change. */
        value: string | ImageData;
        /** If the override hasn’t been changed and is the default value. */
        isDefault: boolean;
        /** The layer the override applies to. It will be an immutable version of the layer. */
        affectedLayer: Text | Image | SymbolInstance;
        /** If the value of the override can be changed. */
        editable: boolean;
        /** If the override is selected (or undefined if it’s the override of a Symbol Master). */
        selected: boolean | undefined;
        /**
         * Get the frame of an Override  
         * The frame of an override can be different than the frame of its affected Layer in case where the Symbol Instance has been scaled for example.
         * @example var frame = override.getFrame()
         * @returns A Rectangle describing the frame of the affected layer in the Symbol Instance’s coordinates.
         */
        getFrame(): Rectangle;
    }
    /** A special object passed in the context of the action to supply data when the item is an Override. */
    class DataOverride {
        /** The name of the override. */
        id: string;
        /** The override whose value will replaced by the supplied data. */
        override: Override;
        /** The symbol instance that the override is on that will have the data replaced. */
        symbolInstance: SymbolInstance;
    }
    /** A set of functions to handle user settings. The settings are persisted when the user closes Sketch. */
    interface Settings {
        /**
         * Get a plugin setting  
         * Return the value of a setting scoped to your plugin for a given key.
         * @param key The setting to look up.
         * @returns The setting that was stored for the given key. undefined if there was nothing.
         */
        settingForKey<T>(key: string): T | undefined;
        /**
         * Set a plugin setting  
         * Store a value of a setting scoped to your plugin for a given key.
         * @param key The setting to set.
         * @param valye The value to set it to.
         */
        setSettingForKey<T>(key: string, valye: T);
        /**
         * Get a Sketch setting  
         * Return the value of a Sketch setting for a given key.
         * @param key The setting to look up.
         * @returns The setting that was stored for the given key. undefined if there was nothing.
         */
        globalSettingForKey<T>(key: string): T | undefined;
        /**
         * Set a Sketch setting
         * Store a value of a Sketch setting for a given key.  
         * @param key The setting to set.
         * @param valye The value to set it to.
         */
        setGlobalSettingForKey<T>(key: string, valye: T);
        /**
         * Get a Layer setting  
         * Return the value of a setting for a given key on a specific Layer or DataOverride or Override.
         * @param layer The layer on which a setting is stored.
         * @param key The setting to look up.
         */
        layerSettingForKey<T>(layer: Layer | Override | DataOverride, key: string): T;
        /**
         * Store a value of a setting for a given key on a specific Layer or DataOverride or Override.
         * @param layer The layer on which the setting is set.
         * @param key The setting to set.
         * @param valye The value to set it to.
         */
        setLayerSettingForKey<T>(layer: Layer | Override | DataOverride, key: string, valye: T);
        /**
         * Get a Document setting
         * @param document The document on which a setting is stored.
         * @param key The setting to look up.
         */
        documentSettingForKey<T>(document: Document, key: string): T;
        /**
         * Store a value of a setting for a given key on a specific document.
         * @param document The document on which the setting is set.
         * @param key The setting to set.
         * @param valye The value to set it to.
         */
        setDocumentSettingForKey<T>(document: Document, key: string, valye: T);
        /**
         * Get a session setting  
         * Return the value of a variable which is persisted when the plugin finishes to run but is not persisted when Sketch closes. It is useful when you want to keep a value between plugin’s runs.
         * @param key The variable to look up.
         * @returns The setting that was stored for the given key. undefined if there was nothing.
         */
        sessionVariable<T>(key: string): T | undefined;
        /**
         * Set a session setting  
         * Store a value of a variable which is persisted when the plugin finishes to run but is not persisted when Sketch closes. It is useful when you want to keep a value between plugin’s runs.
         * @param key The variable to set.
         * @param valye The value to set it to.
         */
        setSessionVariable<T>(key: string, valye: T);
    }
    /** A set of functions to show some user interfaces. The set is small on purpose. Any more complex UI should be provided by third party libraries and doesn’t need to be in the core. */
    interface UI {
        /**
         * Show a small, temporary, message to the user. The message appears at the bottom of the selected document, and is visible for a short period of time. It should consist of a single line of text.
         * @param text The message to show.
         * @param document The document to show the message into.
         */
        message(text: string, document?: Document): void;
        /**
         * Show an alert with a custom title and message. The alert is modal, so it will stay around until the user dismisses it by pressing the OK button.
         * @param title The title of the alert.
         * @param text The text of the message.
         */
        alert(title: string, text: string): void;
        /**
         * Shows a simple input sheet which displays a message, and asks for an input from the user.
         * @param message The prompt message to show.
         * @param options Options to customize the input sheet. Most of the options depends on the type of the input.
         * @param callback A function called after the user entered the input. It is called with an Error if the user canceled the input and a string or number depending on the input type (or undefined).
         */
        getInputFromUser<T>(
            /** The prompt message to show. */
            message: string,
            /** Options to customize the input sheet. Most of the options depends on the type of the input. */
            options?: {
                /** A secondary text to describe with more details the input. */
                description?: string,
                /** The type of the input. */
                type?: INPUT_TYPE,
                /** The initial value of the input. */
                initialValue?: T /*string | number*/,
                /** The possible choices that the user can make. Only used for a selection input. */
                possibleValues?: string[],
                /** Controls the height of the input field. Only used for a string input. If a value is provided it converts the textfield into a scrollable textarea. */
                numberOfLines?: number,
            },
            /** A function called after the user entered the input. It is called with an Error if the user canceled the input and a string or number depending on the input type (or undefined). */
            callback?: (err, result?: T) => void
        );
        /** Get the theme of Sketch */
        getTheme(): 'light ' | ' dark';
        /** Enumeration of the positions of a border. */
        readonly INPUT_TYPE: typeof INPUT_TYPE;
    }
    /** When your plugin supplies some data, don’t forget to set the suppliesData field to true in your manifest.json! */
    class DataSupplier {
        // TODO DataSupplier
    }
    /** A way to keep track of a asynchronous task. The script will stay alive as long as at least one fiber is running. */
    interface Async {
        /**
         * By default, Sketch cleans up your script as soon as its call-stack is empty. So if you schedule an asynchronous task, chances are that when the task returns, your script will be cleaned up and it will crash Sketch.
         * 
         * A fiber is a way to keep track of a asynchronous task. The script will stay alive as long as at least one fiber is running.
         * @example var fiber = require('sketch/async').createFiber()
         * longRunningTask(function(err, result) {
         *   fiber.cleanup()
         *   // you can continue working synchronously here
         * })
         */
        createFiber(): Fiber;
    }
    /** Fiber is a way to keep track of a asynchronous task. The script will stay alive as long as at least one fiber is running. */
    interface Fiber {
        /** To end the fiber. This will tell Sketch that it can garbage collect the script if no other fiber is running. */
        cleanup(): void;
        /**
         * Run a function when the fiber is about to be cleaned up by setting a callback.  
         * Do your clean up in this function instead of doing before calling fiber.cleanup: there might be some cases where the fiber will be cleaned up by Sketch so you need to account for that.
         * @param callback 
         */
        onCleanup(callback: () => void);
    }
    /**
     * An object that represent a Gradient Stop. 
     * Each of colors of a Gradient are represented 
     * by a Stop. A Gradient can have as many Stops 
     * as you’d like.
     */
    interface GradientStop {
        /**
         * The position of the Stop. 0 represents 
         * the start of the gradient while 1 
         * represent the end.
         */
        position: number;
        /** The color of the Stop */
        color: string;
    }
    /**
     * An ImageData is a wrapper around a native NSImage.
     * You can access the native NSImage with nsimage or a native NSData representation of the image with nsdata.
     */
    interface ImageData {
        /** return a native NSImage */
        nsimage,
        /** return a native NSData representation of the image */
        nsdata,
    }
    /** An Object that can imported from a Library. All its properties are read-only. */
    interface ImportableObject {
        /** The unique ID of the Object. */
        readonly id: string;
        /** The name of the Object. */
        readonly name: string;
        /** The type of the Object. Will only be Library.ImportableObjectType.Symbol for now. */
        readonly objectType: ImportableObjectType;
        /** The Library the Object is part of. */
        readonly library: Library;
        /**
         * Import in the Document  
         * An Importable Object is linked to a Document so importing it will import it in the said Document.
         * @returns If the objectType of the Object is Symbol, it will return a Symbol Master which will be linked to the Library (meaning that if the Library is updated, the Symbol Instances created from the Master will be updated as well).
         */
        import(): SymbolMaster | Style | Swatch;
    }
    /** Wrapper classes that are used to represent reusable assets retrieved from a document or globally. */
    interface Assets {
        colors: ColorAsset[],
        gradients: GradientAsset[],
    }
    /** Wrapper classes that are used to represent reusable color assets retrieved from a document or globally. */
    interface ColorAsset {
        /** The name of the asset, or null. */
        name: string;
        /** The hex string for the color. */
        color: string;
    }
    /** A Color that references a Color Variable, which you can use anywhere the API expects a Color object. */
    class Swatch {
        static from(option: {
            /** The name of the swatch, or null. */
            name: string,
            /** The hex string for the color. */
            color: string,
        }): Swatch;
        /** Get a referencing Color (MSColor object) */
        readonly referencingColor: any;
        /** Get color */
        color: string;
        /** Get name */
        name: string;
    }
    /** Wrapper classes that are used to represent reusable gradient assets retrieved from a document or globally. */
    interface GradientAsset {
        /** The name of the asset, or null. */
        name: string;
        /** The gradient object. */
        gradient: Gradient;
    }
    /** An object that represent a Gradient. */
    interface Gradient {
        /** The type of the Gradient. */
        gradientType: GradientType;
        /** The position of the start of the Gradient */
        from: Point;
        /** The position of the end of the Gradient. */
        to: Point;
        /**
         * When the gradient is Radial, the from and 
         * to points makes one axis of the ellipse of 
         * the gradient while the aspect ratio 
         * determine the length of the orthogonal 
         * axis (aspectRatio === 1 means that it’s a circle).
         */
        aspectRatio: number;
        /** The different stops of the Gradient */
        stops: GradientStop[];
    }
    /** An object that represent the blur of the layer. */
    interface Blur {
        /** The type of the blur. */
        blurType: BlurType,
        /** The radius of the blur. */
        radius: number,
        /** The angle of the blur (only used when the blur type is Motion). */
        motionAngle: number,
        /** The center of the blur (only used when the blur type is Zoom. */
        center: {
            x: number,
            y: number,
        },
        /** Whether the fill is active or not. */
        enabled: boolean,
    }
    /** An object that represent a Fill. color, gradient and pattern will always be defined regardless of the type of the fill. */
    interface Fill {
        /** The type of the fill. */
        fillType: FillType,
        /** A rgba hex-string (`#000000ff` is opaque black). */
        color: string,
        /** The gradient of the fill. */
        gradient: Gradient,
        /** The pattern of the fill. */
        pattern: {
            /** How the pattern should fill the layer. */
            patternType: PatternFillType,
            /** The image of tile of the pattern. */
            image: ImageData | null,
            /** The scale applied to the tile of the pattern. */
            tileScale: number,
        }
        /** Whether the fill is active or not. */
        enabled: boolean,
    }
    /** An object that represent a Border. */
    interface Border {
        /** The type of the fill of the border. */
        fillType: FillType,
        /** A rgba hex-string (`#000000ff` is opaque black). */
        color: string,
        /** The gradient of the fill. */
        gradient: Gradient,
        /** Whether the border is active or not. */
        enabled: boolean,
        /** The position of the border. */
        position: BorderPosition,
        /** The thickness of the border. */
        thickness: number,
    }
    /** An object that represent the options that the Borders of the Layer share. */
    interface BorderOptions {
        /** The type of the arrow head for the start of the path. */
        startArrowhead: Arrowhead,
        /** The type of the arrow head for the end of the path. */
        endArrowhead: Arrowhead,
        /** The dash pattern of the borders. For example, a dash pattern of 4-2 will draw the stroke for four pixels, put a two pixel gap, draw four more pixels and then so on. A dashed pattern of 5-4-3-2 will draw a stroke of 5 px, a gap of 4 px, then a stroke of 3 px, a gap of 2 px, and then repeat. */
        dashPattern: number[],
        /** The type of the border ends (if visible). */
        lineEnd: LineEnd,
        /** The type of the border joins (if any). */
        lineJoin: LineJoin,
    }
    /** An object that represent a Shadow. */
    interface Shadow {
        /** A rgba hex-string (#000000ff is opaque black). */
        color: string,
        /** The blur radius of the shadow. */
        blur: number,
        /** The horizontal offset of the shadow. */
        x: number,
        /** The vertical offset of the shadow. */
        y: number,
        /** The spread of the shadow. */
        spread: number,
        /** Whether the fill is active or not. */
        enabled: boolean,
    }
    /**
     * The fontAxes property allows you to adjust the parameters, or “axes”, exposed by variable fonts.  
     * It works by allowing you to get and set an object representing the axes for a Text Layer’s current font. The object will only contain information about the axes supported by the Text Layer’s current font, and these will vary from font to font.
     */
    interface FontAxes {
        /** The axis id */
        id: string,
        /** The minimum value allowable on the axis */
        min: number,
        /** The maximum value allowable on the axis */
        max: number,
        /** The current axis value */
        value: number,
    }
    /** The way to save the document. */
    enum SaveMode {
        /** Overwrites a document’s file with the document’s contents */
        Save = 'Save',
        /** Writes a document’s contents to a new file and then changes the document’s current location to point to the just-written file */
        SaveAs = 'SaveAs',
        /** Writes a document’s contents to a new file without changing the document’s current location to point to the new file. */
        SaveTo = 'SaveTo',
    }
    /** 
     * Enumeration of the available sketch types. 
     * 
     * @warning
     * It's not fully documented, extracted with `console.log(sketch.Types)`.  
     * mentioned here: https://developer.sketch.com/reference/api/#create-a-new-group
    */
    enum Types {
        Library = 'Library',
        Style = 'Style',
        Fill = 'Fill',
        GradientAsset = 'GradientAsset',
        ImageData = 'ImageData',
        Image = 'Image',
        Shadow = 'Shadow',
        Document = 'Document',
        ColorAsset = 'ColorAsset',
        SharedStyle = 'SharedStyle',
        Override = 'Override',
        Group = 'Group',
        Artboard = 'Artboard',
        Border = 'Border',
        BorderOptions = 'BorderOptions',
        Shape = 'Shape',
        Blur = 'Blur',
        Gradient = 'Gradient',
        SymbolMaster = 'SymbolMaster',
        DataOverride = 'DataOverride',
        Text = 'Text',
        HotSpot = 'HotSpot',
        Page = 'Page',
        ImportableObject = 'ImportableObject',
        Flow = 'Flow',
        SymbolInstance = 'SymbolInstance',
        ShapePath = 'ShapePath',
        GradientStop = 'GradientStop',
        Slice = 'Slice',
        ExportFormat = 'ExportFormat',
        CurvePoint = 'CurvePoint',
    }
    /** Enumeration of the type of Shared Style. */
    enum ShapeType {
        Rectangle = 'Rectangle',
        Oval = 'Oval',
        Triangle = 'Triangle',
        Polygon = 'Polygon',
        Star = 'Star',
        Custom = 'Custom',
    }
    /** Enumeration of the type of point types. */
    enum PointType {
        Undefined = 'Undefined',
        Straight = 'Straight',
        Mirrored = 'Mirrored',
        Asymmetric = 'Asymmetric',
        Disconnected = 'Disconnected',
    }
    /** Enumeration of the available color space settings. */
    enum ColorSpace {
        /** The default setting */
        Unmanaged = 'Unmanaged',
        /** sRGB color profile */
        sRGB = 'sRGB',
        /** Display P3 color profile */
        P3 = 'P3',
    }
    /** Enumeration of the type of a Gradient. */
    enum GradientType {
        /**
         * Linear gradients tend to be the most common, 
         * where two colors will appear at opposite 
         * points of an object and will blend, or transition 
         * into each other.
         */
        Linear = 'Linear',
        /**
         * A radial gradient will create an effect where the 
         * transition between color stops will be in a 
         * circular pattern.
         */
        Radial = 'Radial',
        /**
         * This effect allows you to create gradients that 
         * sweep around the circumference (measured by the 
         * maximum width or height of a layer) in a clockwise 
         * direction.
         */
        Angular = 'Angular',
    }
    /** Enumeration of the line spacing behavior for the text. */
    enum LineSpacing {
        /** Uses min & max line height on paragraph style */
        constantBaseline = 'constantBaseline',
        /** Uses MSConstantBaselineTypesetter for fixed line height */
        variable = 'variable',
    }
    /** Enumeration of the alignments of the text. */
    enum Alignment {
        /** Visually left aligned */
        left = 'left',
        /** Visually right aligned */
        right = 'right',
        /** Visually centered */
        center = 'center',
        /** Fully-justified. The last line in a paragraph is natural-aligned. */
        justify = 'justify',
    }
    /** Enumeration of the alignments of the text. */
    enum VerticalAlignment {
        /** Visually top aligned */
        top = 'top',
        /** Visually vertically centered */
        center = 'center',
        /** Visually bottom aligned */
        bottom = 'bottom',
    }
    /** Enumeration of the type of Shared Style. */
    enum StyleType {
        Text = 'Text',
        Layer = 'Layer',
        /** Unknown indicates the object is broken and Sketch can’t determine the style type. */
        Unknown = 'Unknown',
    }
    /** Enumeration of the types of Library. */
    enum LibraryType {
        Internal = 'Internal',
        LocalUser = 'LocalUser',
        RemoteUser = 'RemoteUser',
        RemoteTeam = 'RemoteTeam',
        RemoteThirdParty = 'RemoteThirdParty',
    }
    /** Enumeration of the types of Importable Objects. */
    enum ImportableObjectType {
        Symbol = 'Symbol',
        LayerStyle = 'LayerStyle',
        TextStyle = 'TextStyle',
        Swatch = 'Swatch',
    }
    /** Enumeration of the blending mode. */
    enum BlendingMode {
        Normal = 'Normal',
        Darken = 'Darken',
        Multiply = 'Multiply',
        ColorBurn = 'ColorBurn',
        Lighten = 'Lighten',
        Screen = 'Screen',
        ColorDodge = 'ColorDodge',
        Overlay = 'Overlay',
        SoftLight = 'SoftLight',
        HardLight = 'HardLight',
        Difference = 'Difference',
        Exclusion = 'Exclusion',
        Hue = 'Hue',
        Saturation = 'Saturation',
        Color = 'Color',
        Luminosity = 'Luminosity',
    }
    /** Enumeration of the type of a blur. */
    enum BlurType {
        /** A common blur type that will accurately blur in all directions. */
        Gaussian = 'Gaussian',
        /** Blur only in one direction, giving the illusion of motion. */
        Motion = 'Motion',
        /** Will blur from one particular point out. */
        Zoom = 'Zoom',
        /** This will blur any content that appears behind the layer. */
        Background = 'Background',
    }
    /** Enumeration of the types of fill. */
    enum FillType {
        Color = 'Color',
        Gradient = 'Gradient',
        Pattern = 'Pattern',
    }
    /** Enumeration of the types of pattern fill. */
    enum PatternFillType {
        Tile = 'Tile',
        Fill = 'Fill',
        Stretch = 'Stretch',
        Fit = 'Fit',
    }
    /** Enumeration of the positions of a border. */
    enum BorderPosition {
        Center = 'Center',
        Inside = 'Inside',
        Outside = 'Outside',
    }
    /** Enumeration of the type of the Arrowhead for line layers. */
    enum Arrowhead {
        None = 'None',
        OpenArrow = 'OpenArrow',
        FilledArrow = 'FilledArrow',
        Line = 'Line',
        OpenCircle = 'OpenCircle',
        FilledCircle = 'FilledCircle',
        OpenSquare = 'OpenSquare',
        FilledSquare = 'FilledSquare',
    }
    enum LineEnd {
        /** This is the default option that’ll draw the border right to the vector point. */
        Butt = 'Butt',
        /** Creates a rounded, semi-circular end to a path that extends past the vector point. */
        Round = 'Round',
        /** Similar to the rounded cap, but with a straight edges. */
        Projecting = 'Projecting',
    }
    /** Enumeration of the positions of a border. */
    enum LineJoin {
        /** This will simply create an angled, or pointy join. The default setting. */
        Miter = 'Miter',
        /** Creates a rounded corner for the border. The radius is relative to the border thickness. */
        Round = 'Round',
        /** This will create a chamfered edge on the border corner. */
        Bevel = 'Bevel',
    }
    /** Enumeration of the positions of a border. */
    enum INPUT_TYPE {
        string = 'string',
        selection = 'selection',
    }
    /**Enumeration of the animation types. */
    enum AnimationType {
        /**No animation */
        none = 'none',
        /**Slide from the left */
        slideFromLeft = 'slideFromLeft',
        /**Slide from the right */
        slideFromRight = 'slideFromRight',
        /**Slide from the bottom */
        slideFromBottom = 'slideFromBottom',
        /**Slide from the top */
        slideFromTop = 'slideFromTop',
    }
}

interface ILayerConstructorOptions {
    /** The name of the Layer */
    name?: string;
    /** If the layer is locked. */
    locked?: boolean;
    /** If the layer is hidden. */
    hidden?: boolean;
    /**
     * The frame of the Layer. This is given in coordinates 
     * that are local to the parent of the layer.
     */
    frame?: Rectangle;
    /** If the layer is selected. */
    selected?: boolean;
    /** The prototyping action associated with the layer. */
    flow?: Flow;
    /** The export formats of the Layer. */
    exportFormats?: ExportFormat[];
    /** The transformation applied to the Layer. */
    transform?: {
        /** The rotation of the Layer in degrees, clock-wise. */
        rotation?: number;
        /** If the layer is horizontally flipped. */
        flippedHorizontally?: boolean;
        /** If the layer is vertically flipped. */
        flippedVertically?: boolean;
    };
    /**
     * The index of this layer in its parent. 
     * The layer at the back of the parent (visually) 
     * will be layer 0. The layer at the front will 
     * be layer n - 1 (if there are n layers).
     * 
     * You can set the index of the layer to move 
     * it in the hierarchy.
     */
    index?: number;
    /** The style of the Layer. */
    style?: Style;
}