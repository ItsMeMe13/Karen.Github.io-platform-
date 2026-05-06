const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Behaviors.Bullet,
		C3.Behaviors.wrap,
		C3.Behaviors.Sin,
		C3.Plugins.Audio,
		C3.Plugins.MIDI,
		C3.Plugins.Text,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Audio.Acts.Play,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Behaviors.Platform.Cnds.OnMove,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.OnLayoutEnd,
		C3.Plugins.Audio.Acts.StopAll
	];
};
self.C3_JsPropNameTable = [
	{Solid: 0},
	{SolidTile: 0},
	{Platform: 0},
	{ScrollTo: 0},
	{Player: 0},
	{Keyboard: 0},
	{Bullet: 0},
	{Wrap: 0},
	{Sine: 0},
	{Fish: 0},
	{King: 0},
	{Sound: 0},
	{MIDI: 0},
	{Start: 0},
	{Text: 0},
	{Water: 0},
	{BackgroundTile: 0}
];

self.InstanceType = {
	SolidTile: class extends self.ITiledBackgroundInstance {},
	Player: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Fish: class extends self.ISpriteInstance {},
	King: class extends self.ISpriteInstance {},
	Sound: class extends self.IInstance {},
	MIDI: class extends self.IInstance {},
	Start: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Water: class extends self.ITiledBackgroundInstance {},
	BackgroundTile: class extends self.ITiledBackgroundInstance {}
}