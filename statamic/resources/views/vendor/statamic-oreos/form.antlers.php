<form class="oreos-form" action="{{ route:statamic.oreos.save }}" method="post">
  <input type="hidden" name="_token" value="<?php echo csrf_token() ?>">

  <div class="oreos-form_options hidden">
    {{ oreos }}
      {{ if handle }}
      <label>
        <input
          type="checkbox"
          name="oreos[]"
          value="{{ handle }}"
          {{ checked ? 'checked' : '' }}
          {{ required ? 'required disabled' : '' }}
        >
        <span></span>
        <div>
          <p>{{ title }}</p>

          {{ if showDescription && description }}
              <p>{{ description }}</p>
          {{ /if }}
        </div>
      </label>
      {{ /if }}
    {{ /oreos }}
  </div>

  <div class="oreos-form_buttons">
    <button class="cta-button configure-button" type="button" name="configure" value="none">
      Konfigurieren
    </button>

    <button class="cta-button save-button hidden" type="submit" name="action" value="save">
      Speichern
    </button>

    {{ if showAcceptall }}
      <button class="cta-button accept-all-button" type="submit" name="action" value="accept-all">
        Alle akzeptieren
      </button>
    {{ /if }}

    {{ if showCancel }}
      <button class="cancel-button" type="reset" onclick="removeOreosPopup()">
        <?php echo __('statamic-oreos::messages.button.cancel') ?>
      </button>
      <script>
        function removeOreosPopup() {
          const el = document.getElementById('{{ popupId ?? "oreos-popup" }}');
          if (el) el.parentNode.removeChild(el);
        }
      </script>
    {{ /if }}

    {{ if showReset }}
      <button class="reset-button" type="submit" name="action" value="reset">
        <?php echo __('statamic-oreos::messages.button.reset') ?>
      </button>
    {{ /if }}
  </div>
</form>
