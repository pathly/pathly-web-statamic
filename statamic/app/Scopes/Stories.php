<?php

namespace App\Scopes;

use Statamic\Query\Scopes\Scope;

class Stories extends Scope {
  /**
   * Apply the scope.
   *
   * @param \Statamic\Query\Builder $query
   * @param array $values
   * @return void
   */
  public function apply($query, $values) {

    // Person Type
    $person_type = $values->get("filter_person_type");
    if ($person_type != null) {
      $query->where("person_type", "=", $person_type);
    }

    // only filter cancer and therapy thype if person type not relative
    if ($person_type != "relative") {

      // Cancer Type
      $cancer_type = $values->get("filter_cancer_type");
      if ($cancer_type != null) {
        $query->whereJsonContains("cancer_type", $cancer_type);
      }

      // Therapy Type
      $therapy_type = $values->get("filter_therapy_type");
      if ($therapy_type != null) {
        $query->whereJsonContains("therapy_type", $therapy_type);
      }
    }

    // Age Filter
    $from_age = $values->get("filter_from_age");
    $to_age = $values->get("filter_to_age");

    if ($from_age != null && $to_age != null) {
      $query->where("age", ">=", $from_age)->where("age", "<=", $to_age);
    } else if ($from_age != null) {
        $query->where("age", ">=", $from_age);
    } else if ($to_age != null) {
        $query->where("age", "<=", $to_age);
    }

    // Favorites Filter
    $favorites = $values->get("filter_favorites");
    if ($favorites != null) {
      $query->whereIn("id", $favorites);
    }
  }
}
