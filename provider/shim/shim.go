package shim

import (
	"github.com/devopsarr/terraform-provider-whisparr/internal/provider"
	tf "github.com/hashicorp/terraform-plugin-framework/provider"
)

func NewProvider() func() tf.Provider {
	return func() tf.Provider {
		return provider.New()
	}
}
