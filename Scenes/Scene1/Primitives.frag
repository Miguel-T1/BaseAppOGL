#version 330 core

out vec4 FragColor;

in vec3 Normal;
in vec2 TexCoord;

uniform sampler2D Texture0;
uniform vec4 Color;

void main()
{
	//vec4 texSample = texture(Texture0, TexCoord);

	FragColor = Color;


}