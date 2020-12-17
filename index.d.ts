import { _Sketch } from "./sketch";

declare global {
    /**
    * Javascript API for Sketch without UI, Settings, DataSupplier, Async
    * @example // require without UI, Settings, DataSupplier, Async
    * var sketch: SketchDom = require('sketch/dom');
    * // require others according to your needs
    * var async: Async = require('sketch/async');
    * var DataSupplier: DataSupplier = require('sketch/data-supplier');
    * var UI: UI = require('sketch/ui');
    * var Settings: Settings = require('sketch/settings');
    */
    type SketchDom = _Sketch.SketchDom;
    /**
    * Javascript API for Sketch
    * @example var sketch: Sketch = require('sketch');
    */
    type Sketch = _Sketch.Sketch;
    type Component = _Sketch.Component;
    /** A Sketch document. */
    type Document = _Sketch.Document;
    /** A Sketch Library. */
    type Library = _Sketch.Library;
    /** The style of a Layer. */
    type Style = _Sketch.Style;
    /** A shared style (either a layer style or a text style). */
    type SharedStyle = _Sketch.SharedStyle;
    /** The prototyping action associated with a layer. */
    type Flow = _Sketch.Flow;
    /** An export format associated with a layer. */
    type ExportFormat = _Sketch.ExportFormat;
    /** A utility class to represent the layers selection. Contains some methods to make interacting with a selection easier. */
    type Selection = _Sketch.Selection;
    /** A utility class to represent a curve point (with handles to control the curve in a path). */
    type CurvePoint = _Sketch.CurvePoint;
    /** A utility class to represent a point. */
    type Point = _Sketch.Point;
    /** A utility class to represent a rectangle. Contains some methods to make interacting with a rectangle easier. */
    type Rectangle = _Sketch.Rectangle;
    type SmartLayoutObject = _Sketch.SmartLayoutObject;
    /** The SmartLayout object contains the set of possible Smart Layouts that can be applied to SymbolMaster and Group layers. */
    type SmartLayout = _Sketch.SmartLayout;
    /** A Sketch layer. This is the base class for most of the Sketch components and defines methods to manipulate them. */
    type Layer = _Sketch.Layer;
    /** A group of layers. It is also an instance of Layer so all the methods defined there are available. */
    type Group = _Sketch.Group;
    /** A Sketch page. It is an instance of both Layer and Group so all the methods defined there are available. */
    type Page = _Sketch.Page;
    /** A Sketch artboard. It is an instance of both Layer and Group so all the methods defined there are available. */
    type Artboard = _Sketch.Artboard;
    /** A shape layer. It is shaped by its layers which have boolean operations between them. */
    type Shape = _Sketch.Shape;
    /** An image layer. */
    type Image = _Sketch.Image;
    /** A shape path layer. */
    type ShapePath = _Sketch.ShapePath;
    /** A text layer. */
    type Text = _Sketch.Text;
    /** A Symbol master. It is an instance of Artboard (hence of Layer and Group) so all the methods defined there are available. */
    type SymbolMaster = _Sketch.SymbolMaster;
    /** A Symbol instance. */
    type SymbolInstance = _Sketch.SymbolInstance;
    /** A Sketch hotspot. */
    type HotSpot = _Sketch.HotSpot;
    /** A Sketch slice. */
    type Slice = _Sketch.Slice;
    /** A Symbol override. This component is not exposed, it is only returned when accessing the overrides of a Symbol Instance or Symbol Master. The overrides are not available until after the instance is injected into the document. */
    type Override = _Sketch.Override;
    /** A special object passed in the context of the action to supply data when the item is an Override. */
    type DataOverride = _Sketch.DataOverride;
    /** A set of functions to handle user settings. The settings are persisted when the user closes Sketch. */
    type Settings = _Sketch.Settings;
    /** A set of functions to show some user interfaces. The set is small on purpose. Any more complex UI should be provided by third party libraries and doesn’t need to be in the core. */
    type UI = _Sketch.UI;
    /** When your plugin supplies some data, don’t forget to set the suppliesData field to true in your manifest.json! */
    type DataSupplier = _Sketch.DataSupplier;
    /** A way to keep track of a asynchronous task. The script will stay alive as long as at least one fiber is running. */
    type Async = _Sketch.Async;
    /** Fiber is a way to keep track of a asynchronous task. The script will stay alive as long as at least one fiber is running. */
    type Fiber = _Sketch.Fiber;
    /** An object that represent a Gradient Stop. Each of colors of a Gradient are represented by a Stop. A Gradient can have as many Stops as you’d like. */
    type GradientStop = _Sketch.GradientStop;
    /** An ImageData is a wrapper around a native NSImage. You can access the native NSImage with nsimage or a native NSData representation of the image with nsdata. */
    type ImageData = _Sketch.ImageData;
    /** An Object that can imported from a Library. All its properties are read-only. */
    type ImportableObject = _Sketch.ImportableObject;
    /** Wrapper classes that are used to represent reusable assets retrieved from a document or globally. */
    type Assets = _Sketch.Assets;
    /** Wrapper classes that are used to represent reusable color assets retrieved from a document or globally. */
    type ColorAsset = _Sketch.ColorAsset;
    /** A Color that references a Color Variable, which you can use anywhere the API expects a Color object. */
    type Swatch = _Sketch.Swatch;
    /** Wrapper classes that are used to represent reusable gradient assets retrieved from a document or globally. */
    type GradientAsset = _Sketch.GradientAsset;
    /** An object that represent a Gradient. */
    type Gradient = _Sketch.Gradient;
    /** An object that represent the blur of the layer. */
    type Blur = _Sketch.Blur;
    /** An object that represent a Fill. color, gradient and pattern will always be defined regardless of the type of the fill. */
    type Fill = _Sketch.Fill;
    /** An object that represent a Border. */
    type Border = _Sketch.Border;
    /** An object that represent the options that the Borders of the Layer share. */
    type BorderOptions = _Sketch.BorderOptions;
    /** An object that represent a Shadow. */
    type Shadow = _Sketch.Shadow;
    /**
    * The fontAxes property allows you to adjust the parameters, or “axes”, exposed by variable fonts.
    * It works by allowing you to get and set an object representing the axes for a Text Layer’s current font. The object will only contain information about the axes supported by the Text Layer’s current font, and these will vary from font to font.
    */
    type FontAxes = _Sketch.FontAxes;
    /** The way to save the document. */
    type SaveMode = _Sketch.SaveMode;
    /** Enumeration of the available color space settings. */
    type Types = _Sketch.Types;
    /** Enumeration of the type of Shared Style. */
    type ShapeType = _Sketch.ShapeType;
    /** Enumeration of the type of Shared Style. */
    type PointType = _Sketch.PointType;
    /** Enumeration of the available color space settings. */
    type ColorSpace = _Sketch.ColorSpace;
    /** Enumeration of the type of a Gradient. */
    type GradientType = _Sketch.GradientType;
    /** Enumeration of the line spacing behavior for the text. */
    type LineSpacing = _Sketch.LineSpacing;
    /** Enumeration of the alignments of the text. */
    type Alignment = _Sketch.Alignment;
    /** Enumeration of the alignments of the text. */
    type VerticalAlignment = _Sketch.VerticalAlignment;
    /** Enumeration of the type of Shared Style. Unknown indicates the object is broken and Sketch can’t determine the style type. */
    type StyleType = _Sketch.StyleType;
    /** Enumeration of the types of Library. */
    type LibraryType = _Sketch.LibraryType;
    /** Enumeration of the types of Importable Objects. */
    type ImportableObjectType = _Sketch.ImportableObjectType;
    /** Enumeration of the blending mode. */
    type BlendingMode = _Sketch.BlendingMode;
    /** Enumeration of the type of a blur. */
    type BlurType = _Sketch.BlurType;
    /** Enumeration of the types of fill. */
    type FillType = _Sketch.FillType;
    /** Enumeration of the types of pattern fill. */
    type PatternFillType = _Sketch.PatternFillType;
    /** Enumeration of the positions of a border. */
    type BorderPosition = _Sketch.BorderPosition;
    /** Enumeration of the type of the Arrowhead for line layers. */
    type Arrowhead = _Sketch.Arrowhead;
    type LineEnd = _Sketch.LineEnd;
    /** Enumeration of the positions of a border. */
    type LineJoin = _Sketch.LineJoin;
    /** Enumeration of the positions of a border. */
    type INPUT_TYPE = _Sketch.INPUT_TYPE;
    /**Enumeration of the animation types. */
    type AnimationType = _Sketch.AnimationType;
}

declare const sketchDefault: Sketch;
export default sketchDefault;

export {
    SketchDom,
    Sketch,
    Component,
    Document,
    Library,
    Style,
    SharedStyle,
    Flow,
    ExportFormat,
    Selection,
    CurvePoint,
    Point,
    Rectangle,
    SmartLayoutObject,
    SmartLayout,
    Layer,
    Group,
    Page,
    Artboard,
    Shape,
    Image,
    ShapePath,
    Text,
    SymbolMaster,
    SymbolInstance,
    HotSpot,
    Slice,
    Override,
    DataOverride,
    Settings,
    UI,
    DataSupplier,
    Async,
    Fiber,
    GradientStop,
    ImageData,
    ImportableObject,
    Assets,
    ColorAsset,
    Swatch,
    GradientAsset,
    Gradient,
    Blur,
    Fill,
    Border,
    BorderOptions,
    Shadow,
    FontAxes,
    SaveMode,
    Types,
    ShapeType,
    PointType,
    ColorSpace,
    GradientType,
    LineSpacing,
    Alignment,
    VerticalAlignment,
    StyleType,
    LibraryType,
    ImportableObjectType,
    BlendingMode,
    BlurType,
    FillType,
    PatternFillType,
    BorderPosition,
    Arrowhead,
    LineEnd,
    LineJoin,
    INPUT_TYPE,
    AnimationType,
};

// Definitions below are not exported
